import validator from "validator";

import asyncHandler from "express-async-handler";
import { createStudentService } from "../services/student/createStudent.js";
import { getAllStudentsService } from "../services/student/getAllStudents.js";
import { getStudentByEmail } from "../services/student/getStudentByEmail.js";

export const createStudent = asyncHandler(async (req, res) => {
  const { name, email, school, teachers, courses } = req.body;

  if (!validator.isEmail(email)) {
    res.send("Not a valid email");
  }

  if (name.length < 6) {
    res.send("Not a valid name");
  }

  const doesStudentExist = await getStudentByEmail(email);

  if (doesStudentExist) {
    res.status(401).json({ message: "User already exists" });
    throw "User already exists";
  }

  const student = await createStudentService({
    name,
    email,
    school,
    teachers,
    courses,
  });

  if (student) {
    res.status(201).json({
      message: "Student created successfully",
      student: {
        name: student.name,
        email: student.email,
        school: student.school,
        teachers: student.teachers,
        courses: student.courses,
      },
    });
  } else {
    res.status(500).json({ message: "Unable to create student" });
  }
});

export const getStudents = asyncHandler(async (req, res) => {
  const students = await getAllStudentsService();

  if (students) {
    res.status(201).json({
      students,
    });
  } else {
    res.status(500).json({ message: "Unable to create student" });
  }
});
