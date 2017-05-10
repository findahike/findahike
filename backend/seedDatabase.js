/*
  Populates hikingdb with dummy data.
  To use:
    * start mysql on your machine,
    * create database hikingdb,
    * launch terminal in project's root directory,
    * run 'node backend/dbConfig.js',
    * run 'node backend/seedDatabase.js'.
*/

// Dummy data.
// ==========
var users = [
  {name: 'User1'},
  {name: 'User2'},
  {name: 'User3'},
  {name: 'User4'},
];

var trails = [
  {
    name: 'Trail1',
    latitude: 111.10,
    longitude: 100.10,
    directions: 'Trail1 directions',
    description: 'Trail1 description',
    url: 'Trail1 url'
  },
  {
    name: 'Trail2',
    latitude: 222.20,
    longitude: 200.20,
    directions: 'Trail2 directions',
    description: 'Trail2 description',
    url: 'Trail2 url'
  },
  {
    name: 'Trail3',
    latitude: 333.30,
    longitude: 300.30,
    directions: 'Trail3 directions',
    description: 'Trail3 description',
    url: 'Trail3 url'
  },
];

// Seed database.
// ==============
var db = require('./dbConfig');

var userName = 'User4';
var trailName = 'Trail3';

// Seed users table.
db.user.bulkCreate(users).then(function () {
  // Seed trails table.
  db.trail.bulkCreate(trails).then(function () {
    db.user.findOne({where: {name: userName}}).then(function(user) {
      uid = user.get('id');
      db.trail.findOne({where: {name: trailName}}).then(function(trail) {
        // Seed wishlists table.
        db.wishlist.create({
          trailId: trail.get('id'),
          userId: uid
        });
        // Seed completeds table.
        db.completed.create({
          trailId: trail.get('id'),
          userId: uid
        });
      })
    })
  })
});
