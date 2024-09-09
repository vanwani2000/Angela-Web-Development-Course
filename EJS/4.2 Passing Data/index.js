import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { runInNewContext } from "vm";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const full_name = req.body["fName"].length + req.body["lName"].length;
  // calculating the length of the name entered through the body parser.
  res.render("index.ejs", {
    // passing the num_of_letter to be rendered on ejs side and show on browser.
    num_of_letters: full_name,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
