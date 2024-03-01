import StudentModel from "../../models/Student.js";

export const createStudentService = async ({
  name,
  email,
  school,
  students,
  courses,
}) => {
  try {
    const student = new StudentModel({
      name,
      email,
      school,
      students,
      courses,
    });

    return await student.save();
  } catch (error) {
    console.log("Error", error);
  }
};
