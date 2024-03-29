import TeacherModel from "../../models/Teacher.js";

export const getTeachersService = async () => {
  try {
    const teacher = await TeacherModel.find({}).populate(
      "school",
      "name email",
    );
    console.log("teacher", teacher);
    return teacher;
  } catch (error) {
    console.log(error);
  }
};
