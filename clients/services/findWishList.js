angular.module('hikingApp')

.service('findWishListHikes', ($http) => {
  this.findWishListHikes = () => {
    $http({
      method: 'GET',
      url: '/api/user/wishListHikes' //<----need user id?
    })
    .then((wishListHikes) => {
      console.log('successfully retrieved wishlist hikes from database');
      // TODO: PARSE WISHLISTHIKES AND RETURN
      // wishListHikes.forEach((hike) => {

      // });
    })
    .catch((err) => {
      console.log('error retrieving wishlist hikes from database');
      // TODO: HANDLE ERROR
    });
  }
})
