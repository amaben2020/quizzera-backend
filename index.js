import app from "./src/app.js";

const PORT = 5000;

// app.use

app.use(PORT, () => {
  console.log("running");
});
