import SchoolModel from "../../models/School";

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
