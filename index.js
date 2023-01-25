const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

//Middlewares
//Enable requests from any domain
app.use(cors({ optionsSuccessStatus: 200 }));
//Serving static files
app.use(express.static('public'));

//Routing
//Returns index page
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


//Returns a JSON with the unix and utc values for the date param
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

//Returns a JSON with the unix and utc values for the current date
app.get("/api/",(req,res)=>{
  const date = new Date();
  unixDate = date.getTime();
  res.json({ unix: unixDate, utc: date.toUTCString() });
});

//Starts listening for requests
app.listen(PORT, () => {
  console.log('Server listening on port:', PORT);
});
