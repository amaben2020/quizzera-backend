import validator from "validator";

import asyncHandler from "express-async-handler";
import { createTeacherService } from "../services/teacher/createTeacher.js";

export const createTeacher = asyncHandler(async (req, res) => {
  const { name, email, school, students, courses } = req.body;

  if (!validator.isEmail(email)) {
    res.send("Not a valid email");
  }

  if (name.length < 6) {
    res.send("Not a valid name");
  }

  const teacher = await createTeacherService({
    name,
    email,
    school,
    students,
    courses,
  });

  if (teacher) {
    res.status(201).json({
      message: "Teacher created successfully",
      teacher: {
        id: teacher._id,
        name: teacher.name,
        email: teacher.email,
        school: teacher.school,
        students: teacher.students,
        courses: teacher.courses,
        loginId: teacher.loginId,
      },
    });
  } else {
    res.status(500).json({ message: "Something went wrong" });
  }
});
