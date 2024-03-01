import TeacherModel from "../../models/Teacher.js";

export const getStudentByEmail = async (email) => {
  try {
    const user = await TeacherModel.findOne({ email });
    return user.email.length > 0;
  } catch (error) {
    console.log(error);
  }
};
