import { Schema, model } from "mongoose";

const StudentSchema = Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },

  email: {
    type: String,
    required: [true, "Please enter an email"],
  },

  teacher: {
    type: Schema.Types.ObjectId,
    ref: "Student",
  },

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

const StudentModel = model("Student", StudentSchema);

export default StudentModel;
