//-------------------------------- LABB 1 --------------------------------

//Require ("importing") express and create a webserver that we connect to app
const express = require("express");
const app = express();

//Port as a variable, set to 5000
const PORT = 5000;

//Importing/declaring path (built in module that gives us access to our files)
const path = require("path");

//To enable serving static files. Here we serve all files in the "public" folder
app.use(express.static(path.join(__dirname, "public")));

//Get a random number between 0 and 1023
app.get("/api/random", (req, res) => {
  const random = Math.floor(Math.random() * 1023);
  res.json({ number: random });
  //we return a json-file immediately instead of using content-type etc
});

//Write a number of your choice in the URL and receive a random number between 0 and your number
app.get("/api/custom_random/:num", (req, res) => {
  //Access the URL param value
  let params = req.params;
  //We need specify .num after params to reach the number, otherwise it's a json-object
  let customRandom = Math.floor(Math.random() * parseInt(params.num));
  res.json({ number: customRandom });
});

app.post("/api/:word", (req, res) => {
  // Access the word from params
  const word = req.params.word;
  // Make word into uppcase
  const uppercase = word.toUpperCase();
  // Check length of the word
  const wordLength = word.length;
  res.json({
    msg: `Your word in uppercase: ${uppercase}`,
    wordLength: wordLength,
  });
});

//-------------------------------- LABB 2 --------------------------------
const counter = 5;

app.listen(PORT, () => {
  console.log(`Now we're listening at http://localhost:${PORT}`, __dirname);
});

// MISC
// - req = information about the request, res = the response that's sent back
// - .use, .get etc are express syntax
// after a successful .get, the following code will not run, it stops after the get request.
// unlike .get, .use will always run
