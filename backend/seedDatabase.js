/*
  Populates hikingdb with dummy data.
  To use:
    * run the init.sql script,
    * launch terminal in this folder,
    * run 'node seedDatabase.js',
    * hit Ctrl + C after success messages stop printing to the terminal.
*/

// Dummy data.
// ==========
var users = [
  {name: 'User1'},
  {name: 'User2'},
  {name: 'User3'},
  {name: 'User4'}
];

var trails = [
  {
    name: 'Trail1',
    latitude: 11.10,
    longitude: 100.10,
    directions: 'Trail1 directions',
    description: 'Trail1 description',
    url: 'Trail1 url'
  },
  {
    name: 'Trail2',
    latitude: 22.20,
    longitude: 200.20,
    directions: 'Trail2 directions',
    description: 'Trail2 description',
    url: 'Trail2 url'
  },
  {
    name: 'Trail3',
    latitude: 33.30,
    longitude: 300.30,
    directions: 'Trail3 directions',
    description: 'Trail3 description',
    url: 'Trail3 url'
  },
];

// Seed database.
// ==============
var db = require('./dbConfig');

var user = {name: 'Johnny'};

// Seed users table.
users.forEach(function (user) {
  db.query('INSERT INTO users SET ?', user, function (err, result) {
    if (err) {
      console.log('Error seeding users table.');
      throw err;
    }
    console.log(`Successfully added ${user.name} to users table.`);
  });
});

// Seed trails table.
trails.forEach(function (trail) {
  db.query('INSERT INTO trails SET ?', trail, function (err, result) {
    if (err) {
      console.log('Error seeding trails table.');
      throw err;
    }
    console.log(`Successfully added ${trail.name} to trails table.`);
  });
});

// Seed completeds table.
users.slice(0,3).forEach(function (user) {
  trails.forEach(function (trail) {
    var completed = {};

    // Get value of userId foreign key.
    var userQuery = `
      SELECT id
      FROM users
      WHERE name = ?
    `;

    db.query(userQuery, [user.name], function (err, result) {
      if (err) {
        console.log('Error querying users table.');
        throw err;
      }
      completed.userId = result[0].id;

      // Get value of trailId foreign key.
      var trailQuery = `
        SELECT id
        FROM trails
        WHERE name = ?
      `;

      db.query(trailQuery, [trail.name], function (err, result) {
        if (err) {
          console.log('Error querying trails table.');
          throw err;
        }
        completed.trailId = result[0].id;
        completed.rating = result[0].id;  // Dummy value for rating.

        // Seed completeds table.
        db.query('INSERT INTO completeds SET ?', completed, function (err, result) {
          if (err) {
            console.log('Error seeding completeds table.');
            throw err;
          }
          console.log(`Successfully added trail to completeds table.`);
        });
      });
    });
  });
});

// Seed wishlists table.
users.slice(2).forEach(function (user) {
  trails.forEach(function (trail) {
    var wishlist = {};

    // Get value of userId foreign key.
    var userQuery = 'SELECT id FROM users WHERE name = ?';

    db.query(userQuery, [user.name], function (err, result) {
      if (err) {
        console.log('Error querying users table.');
        throw err;
      }
      wishlist.userId = result[0].id;

      // Get value of trailId foreign key.
      var trailQuery = 'SELECT id FROM trails WHERE name = ?';

      db.query(trailQuery, [trail.name], function (err, result) {
        if (err) {
          console.log('Error querying trails table.');
          throw err;
        }
        wishlist.trailId = result[0].id;

        // Seed wishlists table.
        db.query('INSERT INTO wishlists SET ?', wishlist, function (err, result) {
          if (err) {
            console.log('Error seeding wishlists table.');
            throw err;
          }
          console.log(`Successfully added trail to wishlists table.`);
        });
      });
    });
  });
});