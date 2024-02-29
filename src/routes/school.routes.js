import express from "express";
import { createSchool } from "../controllers/school.controller.js";

const router = express.Router();

// home: get all schools
router.route("/").get((req, res) => {
  res.send("OK");
});

router.route("/create").post(createSchool);

export default router;
