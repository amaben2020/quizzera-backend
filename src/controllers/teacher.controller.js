import validator from "validator";

import asyncHandler from "express-async-handler";
import { createTeacherService } from "../services/teacher/createTeacher.js";
import { getTeacherEmail } from "../services/teacher/getTeacherEmail.js";
import { getTeachersService } from "../services/teacher/getTeachers.js";
export const createTeacher = asyncHandler(async (req, res) => {
  const { name, email, school, students, courses } = req.body;

  if (!validator.isEmail(email)) {
    res.send("Not a valid email");
  }

  if (name.length < 6) {
    res.send("Not a valid name");
  }

  const doesTeacherExist = await getTeacherEmail(email);

  if (doesTeacherExist) {
    res.status(401).json({ message: "User already exists" });
    throw "User already exists";
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
    res.status(500).json({ message: "Unable to create teacher" });
  }
});

export const getTeachers = asyncHandler(async (req, res) => {
  const teachers = await getTeachersService();
  if (teachers) {
    res.status(201).json({
      teachers,
    });
  } else {
    res.status(500).json({ message: "Unable to create teacher" });
  }
});
