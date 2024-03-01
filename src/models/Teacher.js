import { Schema, model } from "mongoose";
import validator from "validator";
import SchoolModel from "./School.js";

const TeacherSchema = Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
    unique: [true, "Name already exists"],
    index: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: [true, "Email already exists"],
    validate: [validator.isEmail, "Please provide an email"],
  },
  loginId: {
    type: String,
    unique: true,
    index: true,
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],

  school: {
    type: Schema.Types.ObjectId,
    ref: "School",
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const formatSchoolToText = (string) => {
  return string
    .split(" ")
    .slice(0, 3)
    .map((elem) => elem.toUpperCase().split("")[0])
    .join("");
};

TeacherSchema.pre("save", async function (next) {
  try {
    if (!this.school) throw Error("School Unavailable");

    const school = await SchoolModel.findOne({ _id: this.school });

    if (this.isNew && school) {
      const firstLetters = formatSchoolToText(school.name);
      this.loginId =
        firstLetters + "/" + Math.random().toString(36).substr(2, 9);
    }
    next();
  } catch (error) {
    next(error);
  }
});

const TeacherModel = model("Teacher", TeacherSchema);

export default TeacherModel;
