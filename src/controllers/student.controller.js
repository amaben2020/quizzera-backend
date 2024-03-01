import validator from "validator";

import asyncHandler from "express-async-handler";
import { createStudentService } from "../services/student/createStudent.js";
import { getStudentByEmail } from "../services/student/getStudentByEmail.js";

export const createStudent = asyncHandler(async (req, res) => {
  const { name, email, school, students, courses } = req.body;

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
    students,
    courses,
  });

  if (student) {
    res.status(201).json({
      message: "student created successfully",
      student: {
        id: student._id,
        name: student.name,
        email: student.email,
        school: student.school,
        students: student.students,
        courses: student.courses,
        loginId: student.loginId,
      },
    });
  } else {
    res.status(500).json({ message: "Unable to create student" });
  }
});

export const getStudents = asyncHandler(async (req, res) => {
  const students = await getStudentsService();

  if (students) {
    res.status(201).json({
      students,
    });
  } else {
    res.status(500).json({ message: "Unable to create student" });
  }
});
