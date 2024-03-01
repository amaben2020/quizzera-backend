import express from "express";
import {
  createTeacher,
  getTeachers,
} from "../controllers/teacher.controller.js";

const router = express.Router();

router.route("/").get(getTeachers);

router.route("/create").post(createTeacher);

export default router;
