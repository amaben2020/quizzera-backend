import StudentModel from "../../models/Student.js";

export const getStudentByEmail = async (email) => {
  try {
    const user = await StudentModel.findOne({ email });
    return user.email.length > 0;
  } catch (error) {
    console.log(error);
  }
};
