const express = require("express");

const port = 8000;
const app = express();

app.get("/", (request, response) => {
  response.send("hello express   ks server");
});

app.get("/users", (request, response) => {
  //3
  response.send([{ from: "John", age: "hi" }, { from: "lilly" }]);
});

app.get("/posts", (request, response) => {
  //3
  response.send([{ from: "John", messages: "hi" }, { from: "hi" }]);
});

app.listen(port, () => {
  `server is running at localhost'${port}`;
});
