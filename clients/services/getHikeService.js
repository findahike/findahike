angular.module('hikingApp')

.service('getHikeService', function($http, getHikeApiService) {

  this.getUserProfile = (userId) => {
    return $http({
      method: 'GET',
      url: `/users/${userId}`
    })
  };
})