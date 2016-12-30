var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.text());

app.get('/', function(req, res){
  res.send('Got it!');
});

app.post("/", function (req, res) {
  res.send("server got: " + req.body || "Nothing.")
  res.end();
});

app.listen(8081); 