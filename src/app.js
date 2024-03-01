import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";

const app = express();

// invoke all middlewares here
app.use(express.json());

mongoose.set("strictQuery", true);
const options = {};
dotenv.config();

app.use(
  express.urlencoded({
    extended: true,
  }),
);

mongoose.connect(process.env.MONGO_DB_URL, options);

mongoose.connection.on("error", (err) => {
  console.log(`Mongoose ${err}`);
});

app.use("/api/v1", router);

export default app;
