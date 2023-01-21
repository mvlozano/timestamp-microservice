const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;

//Middlewares
//Using CORS allow requests from other domains
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

//Endpoint for GET requests to the root
//API answers with the index page
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

//Endpoint for GET requests to the /api route with a date param.
//date param should be a number or string that can be converter using Date() constructor
//to a Date Object and then API should answer a JSON like 
//{unix: unixFormattedDateValue, utc: utcFormattedDateValue};
//otherwise the API answers with a JSON with the key error and the value "Invalid Date"
app.get("/api/:date", (req, res) => {
  const reqDate = req.params.date;
  let date;
  let unixDate;
  if (isNaN(reqDate)) {
    date = new Date(reqDate);
    unixDate = date.getTime();
  } else {
    unixDate = Number(reqDate);
    date = new Date(unixDate);
  }
  !isNaN(date) ? res.json({ unix: unixDate, utc: date.toUTCString() })
    : res.json({ error: "Invalid Date" });
});

//Endpoint for GET request to the /api route without date param.
//API should answer a JSON like {unix: unixFormattedDateValue, utc: utcFormattedDateValue}
//using the actual date for the Date value
app.get("/api/",(req,res)=>{
  const date = new Date();
  unixDate = date.getTime();
  res.json({ unix: unixDate, utc: date.toUTCString() });
});

// listen for requests :)
const listener = app.listen(PORT, () => {
  console.log('Server listening on port:', PORT);
});
