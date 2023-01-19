const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

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

app.get("/api/",(req,res)=>{
  const date = new Date();
  unixDate = date.getTime();
  res.json({ unix: unixDate, utc: date.toUTCString() });
});

// listen for requests :)
const listener = app.listen(PORT, () => {
  console.log('Server listening on port:', PORT);
});
