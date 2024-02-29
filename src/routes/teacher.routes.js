import express from "express";

const router = express.Router();

router.route("/").get((req, res, next) => {
  try {
    return res.status(201).send("Running");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
