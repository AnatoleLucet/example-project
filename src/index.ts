import * as express from "express";
import helloWorld from "./helloWorld";

const app = express();

app.use("/", helloWorld);

app.listen(2000, () => {
  console.log("App launched on port 2000");
});
