import validator from "validator";

import asyncHandler from "express-async-handler";

export const createSchool = asyncHandler(async (req, res) => {
  const { name, email, teachers, students, courses } = req.body;

  if (!validator.isEmail(email)) {
    throw "Not a valid email";
  }

  if (name.length < 6) {
    throw "Not a valid name";
  }

  const school = await createSchoolService({
    name,
    email,
    teachers,
    students,
    courses,
  });

  if (school) {
    res.status(201).json({ ...school });
  }
});
