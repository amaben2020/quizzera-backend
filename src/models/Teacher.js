import { Schema, model } from "mongoose";

const TeacherSchema = Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },

  email: {
    type: String,
    required: [true, "Please enter an email"],
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

const TeacherModel = model("Teacher", TeacherSchema);

export default TeacherModel;
