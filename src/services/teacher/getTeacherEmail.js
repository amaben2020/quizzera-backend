import TeacherModel from "../../models/Teacher.js";

export const getTeacherEmail = async (email) => {
  try {
    const user = await TeacherModel.findOne({ email });
    console.log("user", user);
    return user.email.length > 0;
  } catch (error) {
    console.log(error);
  }
};
