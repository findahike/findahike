var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var db = require('./dbConfig.js')

var app = express();
app.use(bodyParser.json({strict: false}));
app.use(bodyParser.text());

app.use(express.static(__dirname + '/../public'));

app.listen(port, function() {
  console.log(`Running the server on port ${port}`);
})

app.get('/', function (req, res) {
  // Load app homepage.
  res.end();
})

app.get('/users/:id', function (req, res) {
  // Load profile page for specified user.
  db.wishlist.findAll({
    where: {
      userId: req.params.id
    }
  }).then(function (result) {
    console.log(result);
    res.send(result)
  })
})

app.post('/users/:id/', function (req, res) {
  // Add new user to database. Return name of newly added user.
  db.user.create({
    name: req.params.id
  }).then(function (result) {
    res.send(result)
  })
})

app.post('/users/:id/trails', function (req, res) {
  // Add trail to either wishlist or completed.
  var rating = req.body.rating //update rating variable
  if (rating === -1) {
    db.wishlist.create({
      //USER AND TRAIL ID
    })
  } else {
    db.completed.create({
      rating: rating,
      phoneReception: req.body.reception,
      intensity: req.body.intensity,
      scenic: req.body.scenic,
      //USER AND TRAIL ID
    })
  }
})