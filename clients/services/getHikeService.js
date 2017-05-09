angular.module('hikingApp')

.service('getHikeService', ($http, getHikeApiService) => {

  this.getUserProfile = (userId) => {
    $http({
      method: 'GET',
      url: `/users/${userId}`
    })
    .then((profile) => {
      return profile;
    })
    .catch((err) => {
      console.log('error retrieving user profile..');
    });
  };

})