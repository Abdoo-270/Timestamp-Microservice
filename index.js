// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/:id", function (req, res) {
  const id = req.params.id;

  // If 'id' is empty or not provided, assume the current time
  if (!id) {
    const currentUnixTime = Date.now();
    const currentUtcTime = new Date(currentUnixTime).toUTCString();

    return res.json({ unix: currentUnixTime, utc: currentUtcTime });
  }
  let date;
  // Check if 'id' is a Unix timestamp (a number)
  if (!isNaN(id)) {
    date = new Date(parseInt(id)); // Convert Unix timestamp to a Date object
  } else {
    date = new Date(id); // Try parsing 'id' as a date string
  }

  // Check if the 'date' is valid
  if (!isNaN(date.getTime())) {
    // Format the date as specified
    const utcString = date.toUTCString();
    const unixTimestamp = date.getTime();

    res.json({ unix: unixTimestamp, utc: utcString });
  } else {
    res.json({ error: "Invalid date" });
  }
});
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello sss API" });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
