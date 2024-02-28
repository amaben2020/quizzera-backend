import express from "express";
import TeacherRoutes from "./teacher.routes.js";

const router = express.Router();

// teachers api
router.use("/teachers", TeacherRoutes);

export default router;
