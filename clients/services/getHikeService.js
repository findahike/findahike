angular.module('hikingApp')

.service('getHikeService', function($http, getHikeApiService) {

  this.getUserProfile = (username) => {
    return $http({
      method: 'GET',
      url: `/users/${username}`
    })
  };
})