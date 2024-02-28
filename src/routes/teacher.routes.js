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

router.route("/hey").get((req, res, next) => {
  try {
    return res.send("Running");
  } catch (error) {
    next("ERROR", error);
  }
});

export default router;
