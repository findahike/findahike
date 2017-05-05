var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;

var app = express();
app.use(bodyParser.json({strict: false}));
app.use(bodyParser.text());


// app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
  res.send(req.body);
})

app.post('/', function (req, res) {
  res.send(req.body);
})

app.listen(port, function() {
  console.log(`Running the server on port ${port}`);
})