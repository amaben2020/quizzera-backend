import app from "./src/app.js";

//sets up a server for the app to run on so that you can view it using localhost:[port]
app.listen(5001, () => {
  console.log("running");
});
