var bodyParser = require('body-parser');
var express = require('express');
var mysql = require('mysql');

var db = require('./dbConfig.js')

var port = process.env.PORT || 8080;

var app = express();
app.use(bodyParser.json({strict: false}));
app.use(bodyParser.text());

// Serving index.html from the root
app.use(express.static('./'));

app.listen(port, function() {
  console.log(`Running the server on port ${port}`);
})

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

app.post('/users/:name/wishlist', function (req, res) {
  /*
    Insert trail to wishlist.
    Return inserted trail.

    @todo:
      - Refactor get userId logic into standalone module.
      - Don't add trail to wishlists table if user has added it before.
  */

  // Get user's id from users table.
  var usersQuery = 'SELECT id FROM users WHERE name = ?';
  db.query(usersQuery, [req.params.name], function (err, result) {
    if (err) {
      console.log('Error querying users table.');
      throw err;
    }
    var userId = result[0].id;

    // Get trailId.
    var trailCoords = {latitude: req.body.latitude, longitude: req.body.longitude};
    // If trail already exists in trails table with same latitude and longitude,
    trailExists(trailCoords, function (exists) {
      if (exists) {
        console.log('it exists!');  // @test
        getTrailByCoords(trailCoords, function (result) {
          console.log(result);
          var trailId = result.id;

          var wishlistEntry = {trailId: trailId, userId: userId};
          db.query('INSERT INTO wishlists SET ?', wishlistEntry, function (err) {
            if (err) {
              console.log('Error inserting into wishlists table.');
              throw err;
            }
            console.log('wishlistEntry:', wishlistEntry);  // @test
            res.send(result);
          });
        });
      } else {
        // Insert trail into trails table and select id.
        console.log('it does not exist');  // @test
        // Build trailEntry object.
        var trailEntry = {
          name: req.body.name,
          latitude: req.body.latitude,
          longitude: req.body.longitude,
          directions: req.body.directions,
          description: req.body.description,
          url: req.body.url
        };
        console.log('trailEntry:', trailEntry);  // @test
        // Add trailEntry to trails table.
        db.query('INSERT INTO trails SET ?', trailEntry, function (err, result) {
          if (err) {
            console.log('Error inserting into trails table.');
            throw err;
          }
          console.log(result);  // @test
          console.log(result.insertId);  // @test
          // Get trailEntry id.
          var trailId = result.insertId;

          // Build wishlistEntry.
          var wishlistEntry = {trailId: trailId, userId: userId};
          // Add wishlistEntry to wishlists table.
          db.query('INSERT INTO wishlists SET ?', wishlistEntry, function (err) {
            if (err) {
              console.log('Error inserting into wishlists table.');
              throw err;
            }
            console.log('wishlistEntry:', wishlistEntry);  // @test
            // Respond with wishlistEntry.
            res.send(result);
          });
        });
      }
    });
  });
});

app.post('/users/:name/completed', function (req, res) {
  /*
    Insert trail to completed.
    Return inserted trail.

    @todo:
      - Refactor get userId logic into standalone module.
      - Don't add trail to completeds table if user has added it before.
  */

});

var trailExists = function (coordinates, callback) {
  /*
    Check if trail specified for coordinates already exists in trails table.
    coordinates is an object with two properties: latitude and longitude.
    callback is a function to execute if query is successful.
    Pass true or false to callback.

    Usage:
      trailExists({latitude: 11.10, longitude: 100.10}, callback);
  */
  getTrailByCoords(coordinates, function (trail) {
    var truth = Boolean(trail);
    callback(truth);
  });
};

var getTrailByCoords = function (coordinates, callback) {
  /*
    Query trails table for a trail with matching coordinates.
    coordinates is an object with two properties: latitude and longitude.
    callback is a function to execute if query is successful.
    Pass a trail object to callback if trail is found; else, pass undefined.

    Usage:
      getTrailByCoords({latitude: 11.10, longitude: 100.10}, callback);
  */

  var trailQuery = `
    SELECT *
    FROM trails
    WHERE latitude = ${mysql.escape(coordinates.latitude)}
    AND longitude = ${mysql.escape(coordinates.longitude)}
  `;
  db.query(trailQuery, function (err, trail) {
    if (err) {
      console.log('Error querying in getTrailByCoords().');
      throw err;
    }
    callback(...trail);  // Query wraps result object in an array.
  });
};

