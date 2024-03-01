import TeacherModel from "../../models/Teacher.js";

export const createTeacherService = async ({
  name,
  email,
  school,
  students,
  courses,
}) => {
  const teacher = await TeacherModel.create({
    name,
    email,
    school,
    students,
    courses,
  });

  return teacher;
};
