import express from "express";

const app = express();

// invoke all middlewares here
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

export default app;
