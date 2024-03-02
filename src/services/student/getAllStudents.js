import StudentModel from "../../models/Student.js";

export const getAllStudentsService = async () => {
  try {
    const student = await StudentModel.find({}).populate(
      "teachers",
      "name email",
    );
    return student;
  } catch (error) {
    console.log(error);
  }
};
