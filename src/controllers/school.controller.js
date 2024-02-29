import validator from "validator";
import SchoolModel from "../models/School.js";

import asyncHandler from "express-async-handler";

export const createSchool = asyncHandler(async (req, res) => {
  const { name, email, teachers, students, courses } = req.body;

  if (!validator.isEmail(email)) {
    throw "Not a valid email";
  }

  const school = await SchoolModel.create({
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
