//-------------------------------- LABB 1 --------------------------------
//Require ("importing") express and create a webserver that we connect to app
const express = require("express");
const app = express();

//Port as a variable, set to 5000
const PORT = 5000;
app.use(express.json());
//Importing/declaring path (built in module that gives us access to our files)
const path = require("path");

//To enable serving static files. Here we serve all files in the "public" folder
app.use(express.static(path.join(__dirname, "public")));

//---------------- 1A ---------------
//Get a random number between 0 and 1023
app.get("/api/random", (req, res) => {
  const random = Math.floor(Math.random() * 1023);
  res.json({ number: random });
  //we return a json-file immediately instead of using content-type etc
});

//---------------- 1B ---------------
//Write a number of your choice in the URL and receive a random number between 0 and your number
app.get("/api/random/:num", (req, res) => {
  //Access the URL param value
  let params = req.params;
  //We need specify .num after params to reach the number, otherwise it's a json-object
  let customRandom = Math.floor(Math.random() * parseInt(params.num));
  res.json({ number: customRandom });
});

//---------------- 1C ---------------
app.post("/api/word", (req, res) => {
  // Access the word from params
  console.log(req.body);
  const word = req.body.word;

  // Make word into uppcase
  const lowercase = word.toLowerCase();
  // Check length of the word
  const wordLength = word.length;
  res.json({
    msg: `Your word in lowercase: ${lowercase}`,
    wordLength: `${wordLength} letters`,
  });
});

app.listen(PORT, () => {
  console.log(`Now we're listening at http://localhost:${PORT}`, __dirname);
});

// MISC
// .USE, .GET etc are express syntax
// after a successful .GET, the following code will not run, it stops after the GET request.
// unlike .GET, .USE will always run
// PUT: calling the same PUT request multiple times will always produce the same result
// POST: calling a POST request repeatedly have side effects of creating the same resource multiple times.
