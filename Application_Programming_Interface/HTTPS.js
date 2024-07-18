import https from "https"; //  import from native node module, you don't have to explicity install it.
import express from "express";

const app = express();

app.get("/", (req, res) => {
  // creating a option variable which has object. Contains key-value pairs
  const options = {
    hostname: "bored-api.appbrewery.com", // Hostname of the API
    path: "/random", // Endpoint
    method: "GET", // What kind of response you want from that API
  };

  const request = https.request(options, (response) => {
    // This **https.request** is the method for interaction with API. We pass two parameters. One is the option variable that we have created and call back function with response as a parameter.
    let data = "";
    // The response comes back in the form of a callback and it comes back in packets. So we need to group those packets togther and add each chunk onto a data string.
    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      // Once we recieve the end message from our request, that means all the chuncks have been sent over and we can now use the data that we've collected.
      try {
        // Try block
        const result = JSON.parse(data); // convert JSON to JS object
        res.render("index.ejs", {
          activity: result,
        });
      } catch (error) {
        // error block from the data that have come through response.
        console.error("Failed to parse response:", error.message);
        res.status(500).send("Failed to fetch activity. Please try again.");
      }
    });
  });

  request.on("error", (error) => {
    // error from the request message from https.request native node modules
    console.error("Failed to make request:", error.message);
    res.status(500).send("Failed to fetch activity, Please try again.");
  });

  request.end(); // End the request
});
