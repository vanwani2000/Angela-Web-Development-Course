import express from "express";

const app = express();
const port = 3000;

app.use(function logger(req, res, next) {
  console.log(
    "Request Method is " + req.method + " and Request URL is " + req.url,
  );
  console.log(`Request Method is ${req.method} and Request URL is ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello Raja Vanwani");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
