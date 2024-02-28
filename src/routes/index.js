import express from "express";
import TeacherRoutes from "./teacher.routes";
const router = express.Router();

router.use("/teachers", TeacherRoutes);

export { TeacherRoutes };
