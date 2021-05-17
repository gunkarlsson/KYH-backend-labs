//-------------------------------- LABB 3 --------------------------------
const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 5000;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

//---------------- 1A ---------------
app.get("/api/random", (req, res) => {
  const random = Math.floor(Math.random() * 1023);
  res.json({ status: "success", number: random });
});

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
    res.json({ status: "success", counter: countNum });
  });
});

//---------------- 2B ---------------
app.get("/api/add", (req, res) => {
  fs.readFile("./db/counter.txt", (err, data) => {
    if (err) {
      console.log(err);
    }
    countBeforeAdd = Number(data).toString();
    addOne = (Number(data) + 1).toString();
    console.log(
      `You have added 1 to the counter. It was ${countBeforeAdd}, and the new number is: ${addOne}`
    );
    fs.writeFile("./db/counter.txt", addOne, () => {
      res.json({
        countBeforeAdd: Number(countBeforeAdd),
        counter: Number(addOne),
      });
    });
  });
});

//---------------- 2C ---------------
app.get("/api/subtract", (req, res) => {
  fs.readFile("./db/counter.txt", (err, data) => {
    if (err) {
      console.log(err);
    }
    countBeforeSubtract = Number(data).toString();
    subtractOne = (Number(data) - 1).toString();
    console.log(
      `It was ${countBeforeSubtract}, countNum is now ${subtractOne}`
    );
    fs.writeFile("./db/counter.txt", subtractOne, () => {
      res.json({
        countBeforeSubtract: Number(countBeforeSubtract),
        counter: Number(subtractOne),
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Now we're listening at http://localhost:${PORT}`, __dirname);
});

module.exports = app;
