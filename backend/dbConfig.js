var Sequelize = require('sequelize');
var db = new Sequelize('hikingdb','root', '');

var User = db.define('user', {
  name: Sequelize.STRING
});

var Completed = db.define('completed', {
  rating: Sequelize.INTEGER,
  phoneReception: Sequelize.INTEGER,
  intensity: Sequelize.INTEGER,
  scenic: Sequelize.INTEGER
});

var Wishlist = db.define('wishlist', {
});

var Trail = db.define('trail', {
  name: Sequelize.STRING,
  latitude: Sequelize.DECIMAL(10,6),
  longitude: Sequelize.DECIMAL(10,6),
  directions: Sequelize.STRING,
  description: Sequelize.STRING,
  url: Sequelize.STRING
});

var Wishlist = db.define('wishlist', {
});

var Trail = db.define('trail', {
  name: Sequelize.STRING,
  latitude: Sequelize.DECIMAL(10,6),
  longitude: Sequelize.DECIMAL(10,6),
  directions: Sequelize.STRING,
  description: Sequelize.STRING,
  url: Sequelize.STRING
});

User.hasMany(Completed);
User.hasMany(Wishlist);
Trail.hasMany(Completed);
Trail.hasMany(Wishlist);

db.sync();

module.exports.connection = db;
module.exports.user = User;
module.exports.completed = Completed;
module.exports.wishlist = Wishlist;
module.exports.trail = Trail;

