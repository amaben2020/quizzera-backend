import express from "express";
import {
  createTeacher,
  getTeacher,
  getTeachers,
} from "../controllers/teacher.controller.js";

const router = express.Router();

router.route("/").get(getTeachers);
router.route("/login").get(getTeacher);

router.route("/create").post(createTeacher);

export default router;
