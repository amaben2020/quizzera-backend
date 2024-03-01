import express from "express";
import {
  createStudent,
  getStudents,
} from "../controllers/student.controller.js";

const router = express.Router();

router.route("/").get(getStudents);
router.route("/create").post(createStudent);

export default router;
