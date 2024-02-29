import SchoolModel from "../../models/School.js";

export const createSchoolService = async ({
  name,
  email,
  teachers,
  students,
  courses,
}) => {
  const school = await SchoolModel.create({
    name,
    email,
    teachers,
    students,
    courses,
  });

  return school;
};
