import express from "express";
import router from "./routes/index.js";

const app = express();

// invoke all middlewares here
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use("/api/v1", router);

export default app;
