var db = require('./dbConfig');

var userName = 'User3';
var trailName = 'Trail2';

db.wishlist.create({
  userId: db.user.findOne({where: {name: userName}}).get('id'),
  trailId: db.trail.findOne({where: {name: trailName}}).get('id')
});
