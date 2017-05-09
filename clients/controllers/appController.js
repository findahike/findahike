angular.module('hikingApp')
.controller('appController', ($scope, getHikeApiService, getHikeService, postHikeService) => {

  // query the api
  $scope.searchTrailsApi = (city, lat, lon) => {
    getHikeApiService.searchTrailsApi(city, lat, lon)
    .then(searchResults => $scope.searchResults = searchResults);
  };

  // insert a completed hike into db
  $scope.saveCompletedHike = (userId, hike) => {
    // decorate hike with user input
    hike.recommendation = $scope.recommendation;
    hike.cellphoneReception = $scope.cellphoneReception;
    hike.intensity = $scope.intensity;
    hike.scenic = $scope.scenic;
    hike.rating = $scope.rating;
    postHikeService.saveCompletedHike(userId, hike)
    .then(hike => console.log('hike succesfully saved', hike));
  };

  // get the user profile from database
  $scope.getUserProfile = (userId) => {
    getHikeApiService.getUserProfile(userId)
    .then(userProfile => $scope.userProfile = userProfile); // expose userProfile
  };

  // create a new user
  $scope.saveUser = (username) => {
    postHikeService.saveUser(username)
    .then(username => console.log('succesfully created new user'));
  };

})

