import { Schema, model } from "mongoose";

const CourseSchema = Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },

  difficulty: {
    type: Number,
    min: 1,
    max: 5,
    default: 1,
  },

  taughtBy: {
    type: Schema.Types.ObjectId,
    ref: "Teacher",
  },

  school: {
    type: Schema.Types.ObjectId,
    ref: "School",
  },
  takenBy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

const CourseModel = model("Course", CourseSchema);

export default CourseModel;
