import TeacherModel from "../../models/Teacher.js";

export const createTeacherService = async ({
  name,
  email,
  school,
  students,
  courses,
}) => {
  try {
    const teacher = new TeacherModel({
      name,
      email,
      school,
      students,
      courses,
    });

    return await teacher.save();
  } catch (error) {
    console.log("Error", error);
  }
};
