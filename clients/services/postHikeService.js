angular.module('hikingApp')

.service('postHikeService', function($http) {

  this.saveCompletedHike = (userId, hike) => { // handles wishlist and completed hikes
    if (hike.rating === undefined) {
      rating = -1;
    }
    $http({
      method: 'POST',
      url: `/users/${userId}/trails`,
      data: JSON.stringify(hike)
    })
    .then((data) => {
      return data;
    })
    .error((data, status) => {
      console.log(status, 'error saving completed hike');
    });
  };

  this.saveUser = (username) => {
    $http({
      method: 'POST',
      url: `/users/${username}`
    })
    .then((data) => {
      return data;
    })
    .error((err) => {
      console.log('error saving user', err);
    });
  };

})