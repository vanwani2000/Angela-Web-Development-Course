import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(req.rawHeaders);
  res.send("<h1>Hello</h1>");
});

app.get("/About", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Raja Vanwani</p>");
});

app.get("/Contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +91:999999999</p>");
});

app.listen(port, function () {
  console.log(`Server running on port ${port}.`);
});
