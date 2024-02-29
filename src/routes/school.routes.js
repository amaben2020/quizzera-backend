import express from "express";

const router = express.Router();

// home: get all schools
router.route("/").get((req, res) => {
  res.send("OK");
});

export default router;
