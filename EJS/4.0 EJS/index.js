import express from "express";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // const d = new Date();
  // const answer = d.getDay();
  // console.log(answer);
  // if (answer >= 1 || answer <= 5) {
  //     res.send("Hey! It's weekday, it's time to work hard!");
  // } else if (answer === 0 || answer === 6) {
  //     res.send("Hey! It's the weeknd, it's time to have fun!");
  // }
  const today = new Date("July 7, 2024 11:13:00");
  const day = today.getDay();
  console.log(day);

  let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "the weeknd";
    adv = "it's time to have some fun";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
