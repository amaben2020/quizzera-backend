import StudentModel from "../../models/Student.js";

export const createStudentService = async ({
  name,
  email,
  school,
  teachers,
  courses,
}) => {
  try {
    const student = new StudentModel({
      name,
      email,
      school,
      teachers,
      courses,
    });

    return await student.save();
  } catch (error) {
    console.log("Error", error);
  }
};
