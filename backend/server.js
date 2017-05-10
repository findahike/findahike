var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var db = require('./dbConfig.js')

var app = express();
app.use(bodyParser.json({strict: false}));
app.use(bodyParser.text());

// Serving index.html from the root
app.use(express.static('./'));

app.listen(port, function() {
  console.log(`Running the server on port ${port}`);
})

// app.get('/', function (req, res) {
//   // Load app homepage.
//   res.end();
// })

app.get('/users/:name', function (req, res) {
  /*
    Return the profile info for the specified user.
    Currently, profile info is only list of completed and wishlist trails.
  */
  // Declare var to hold profile.

  // Get user's id from users table.

  // Use userId to query wishlists.

  // Use userId to query completeds.


  // Respond with profile.
});

app.post('/users/:name', function (req, res) {
  /*
    Add new user to database.
    Return name of newly added user.
  */

});

app.post('/users/:name/trails', function (req, res) {
  /*
    Insert trail to wishlist if rating is -1; else, add to completed.
    Using rating === -1 as a switch to assign between wishlist and completed.
    Return inserted trail.
  */
  // Get rating from request body.
  var rating = req.body.rating;

  // If trail already exists in trails table with same latitude and longitude,
    // Get existent trail's id from trails table.
  // Else,
    // Insert trail into trails table and select id.


  // If rating is -1,
    // Create wishlist object.
    // Insert wishlist object into wishlists table.
  // Else,
    // Create completed object.
    // Insert completed object into completeds table.

});
