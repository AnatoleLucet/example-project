import * as express from "express";

const app = express();

app.get("/*", (_, res) => res.send("Hello World!"));

var server = app.listen(2000, () => {
  console.log("App launched on port 2000");
});
