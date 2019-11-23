const express = require("express");
const app = express();

app.get("/*", (req, res) => res.send("Hello World!"));

var server = app.listen(2000, () => {
  console.log("Listening on port " + server.address().port + "...");
});
