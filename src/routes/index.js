import express from "express";
import SchoolRoutes from "./school.routes.js";
import TeacherRoutes from "./teacher.routes.js";

const router = express.Router();

// teachers api
router.use("/teacher", TeacherRoutes);

// schools api
router.use("/school", SchoolRoutes);

export default router;
