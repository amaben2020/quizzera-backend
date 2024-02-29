import { Schema, model } from "mongoose";

const SchoolSchema = Schema({
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
  teachers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
    },
  ],
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const SchoolModel = model("School", SchoolSchema);

export default SchoolModel;
