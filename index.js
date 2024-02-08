import express from "express";

const app = express();

const PORT = 5000;

app.use(PORT, () => {
  console.log("running");
});
