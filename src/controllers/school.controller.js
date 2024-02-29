import validator from "validator";

import asyncHandler from "express-async-handler";
import { createSchoolService } from "../services/school/createSchool.js";

export const createSchool = asyncHandler(async (req, res) => {
  const { name, email, teachers, students, courses } = req.body;

  if (!validator.isEmail(email)) {
    res.send("Not a valid email");
  }

  if (name.length < 6) {
    res.send("Not a valid name");
  }

  const school = await createSchoolService({
    name,
    email,
    teachers,
    students,
    courses,
  });

  console.log(school);

  if (school) {
    res.status(201).json({
      message: "School created successfully",
      school: {
        name: school.name,
        email: school.email,
        teachers: school.teachers,
        students: school.students,
        courses: school.courses,
      },
    });
  } else {
    res.status(500).json({ message: "Something went wrong" });
  }
});
