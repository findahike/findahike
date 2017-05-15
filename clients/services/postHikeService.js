angular.module('hikingApp')

.service('postHikeService', function($http) {

  this.saveCompletedHike = (username, hike) => { // handles wishlist and completed hikes
    return $http({
      method: 'POST',
      url: `/users/${username}/completed`,
      data: JSON.stringify(hike)
    })
    .then((data) => {
      return data;
    })
    .catch((data, status) => {
      console.log(status, 'error saving completed hike');
    });
  };

  this.saveUser = (username) => {
    return $http({
      method: 'POST',
      url: `/users/${username}`
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log('error saving user', err);
    });
  };

  this.saveWishlistHike = (username, hike) => { // handles wishlist and completed hikes
    return $http({
      method: 'POST',
      url: `/users/${username}/wishlist`,
      data: JSON.stringify(hike)
    })
    .then((data) => {
      return data;
    })
    .catch((data, status) => {
      console.log(status, 'error saving completed hike');
    });
  };

  this.saveUser = (username) => {
    return $http({
      method: 'POST',
      url: `/users/${username}`
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log('error saving user', err);
    });
  };

})