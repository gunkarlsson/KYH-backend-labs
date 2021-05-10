//-------------------------------- LABB 2 --------------------------------
//Require ("importing") express and create a webserver that we connect to app
const express = require("express");
const app = express();
//Import filesystem
const fs = require("fs");
//Port as a variable, set to 5000
const PORT = 5000;

//Importing/declaring path
const path = require("path");

//To enable serving static files. Here we serve all files in the "public" folder
app.use(express.static(path.join(__dirname, "public")));

//---------------- 2A ---------------
//Get counter data
app.get("/api/counter", (req, res) => {
  // Check data is inside the counter textfile
  fs.readFile("./db/counter.txt", (err, data) => {
    // Check for errors
    if (err) {
      console.log(err);
    }
    // Turn content of counter.txt into a string
    let countNum = data.toString();
    // Send back counter's current state as the response in a json object
    res.json({ counter: countNum });
  });
});

//---------------- 2B ---------------
// Add one to counter
//Put replaces/updates the resource
app.put("/api/add", (req, res) => {
  // Check which data in counter text file ( i.e current counter state)
  fs.readFile("./db/counter.txt", (err, data) => {
    // If error, log to console
    if (err) {
      console.log(err);
    }
    // 1. Turn content of counter.txt into a number and add 1
    // 2. Turn it a string & put it in a new variable
    addOne = (Number(data) + 1).toString();
    console.log(
      `You have added 1 to the counter. The new number is: ${addOne}`
    );
    // Update the state of counter by adding 1 to it
    fs.writeFile("./db/counter.txt", addOne, () => {
      // Send back addOne as the response in a json object
      res.json({ counter: addOne });
    });
  });
});

app.get("/api/subtract", (req, res) => {
  // Check what data is inside the counter text file (our current counter state)
  fs.readFile("./db/counter.txt", (err, data) => {
    // Check for errors
    if (err) {
      console.log(err);
    }
    // 1. Turn content of counter.txt into a number and subtract 1
    // 2. Turn it a string & put it in a new variable
    subtractOne = (Number(data) - 1).toString();
    console.log(`countNum is now ${subtractOne}`);
    // Update the state of counter by subtracting 1 from it
    fs.writeFile("./db/counter.txt", subtractOne, () => {
      // send back countNum as the respons in a json object
      res.json({ counter: subtractOne });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Now we're listening at http://localhost:${PORT}`, __dirname);
});

// MISC
// PUT: calling the same PUT request multiple times will always produce the same result
//POST: calling a POST request repeatedly have side effects of creating the same resource multiple times.
