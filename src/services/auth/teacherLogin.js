import TeacherModel from "../../models/Teacher";

export const teacherLogin = async (loginId) => {
  try {
    const teacher = await TeacherModel.findOne({ loginId });

    if (teacher) {
      return teacher;
    }

    throw new Error("Teacher not found");
  } catch (error) {
    console.log(error);
  }
};
