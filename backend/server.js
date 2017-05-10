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
  var profile = {};

  // Get user's id from users table.
  var userId;
  var usersQuery = 'SELECT id FROM users WHERE name = ?';
  db.query(usersQuery, [req.params.name], function (err, result) {
    if (err) {
      console.log('Error querying users table.');
      throw err;
    }
    userId = result[0].id;

    // Use userId to query wishlists.
    var wishlistQuery = `
      SELECT trails.*
      FROM wishlists
      JOIN trails ON wishlists.trailId = trails.id
      WHERE wishlists.userId = ?
    `;
    db.query(wishlistQuery, [userId], function (err, result) {
      if (err) {
        console.log('Error querying wishlists table.');
        throw err;
      }
      profile.wishlist = result;

      // Use userId to query completeds.
      var completedQuery = `
        SELECT trails.*
        FROM completeds
        JOIN trails ON completeds.trailId = trails.id
        WHERE completeds.userId = ?
      `;
      db.query(completedQuery, [userId], function (err, result) {
        if (err) {
          console.log('Error querying completeds table.')
          throw err;
        }
        profile.completeds = result;

        // Respond with profile.
        res.send(profile);
      });
    });
  });
});

app.post('/users/:name', function (req, res) {
  /*
    Add new user to database.
    Return name of user.

    @todo:
      - Implement a unique username policy.
  */

  db.query('INSERT INTO users SET ?', {name: req.params.name}, function (err) {
    if (err) {
      console.log('Error inserting into users table.');
      throw err;
    }

    // Query users table so client can verify insertion.
    var userQuery = 'SELECT name FROM users WHERE name = ?';
    db.query(userQuery, [req.params.name], function (err, result) {
      if (err) {
        console.log('Error verifying insert into users table.');
        throw err;
      }
      res.send(...result);
    });
  });
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
