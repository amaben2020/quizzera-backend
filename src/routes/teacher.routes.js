import express from "express";
import { createTeacher } from "../controllers/teacher.controller.js";

const router = express.Router();

router.route("/").get((req, res, next) => {
  try {
    return res.status(201).send("Running");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.route("/create").post(createTeacher);

export default router;
