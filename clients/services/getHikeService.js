angular.module('hikingApp')

.service('getHikeService', ($http) => {
  this.findCompletedHikes = () => {
    $http({
      method: 'GET',
      url: '/api/user/completedHikes'  //<----need user id?
    })
    .then((completedHikes) => {
      console.log('sucessfully retrieved completed hikes from database');
      // TODO: PARSE DATA AND RETURN
      // data.forEach((hike) => {
        //push hike into some collector variable
      // });
    })
    .catch((err) => {
      console.log('error retrieving completed hikes from database');
      // TODO: HANDLE ERROR
    });
  };

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
  };

  this.getTrailProfile = () => {
    $http({
      method: 'GET',
      url: '/api/trail/profile' //<---- need trail id?
    })
    .then((profile) => {
      console.log('successfully retrieved profile information from database');
      // TODO: populate template with info from data
    })
    .catch((err) => {
      console.log('error retrieving profile information from database');
      // TODO: HANDLE ERROR
    });
  };

})