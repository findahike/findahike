angular.module('hikingApp')

.service('getHikeService', function($http, getHikeApiService) {

  this.getUserProfile = (username) => {
    return $http({
      method: 'GET',
      url: `/users/${username}`
    })
    .catch(err => console.log('error retrieving user profile'));
  };
})