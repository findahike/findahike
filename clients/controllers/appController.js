angular.module('hikingApp')

.controller('appController', ($scope, getHikeApiService, getHikeService, postHikeService) => {

  // get the user profile from database
  $scope.getUserProfile = (username) => {
    getHikeService.getUserProfile(username)
    .then(response => {
      $scope.userProfile = response.data;  // expose userProfile
      console.log('succesfully got user Profile', $scope.userProfile);
    });
  };

  // create a new user
  $scope.saveUser = (username) => {
    postHikeService.saveUser(username)
    .then(username => console.log('succesfully created new user'));
  };

  $scope.changeViewState = (page) => {
    $scope.viewState = page;
    if (page === 'userProfile') { // refreshes the userprofile view with User1 data
      $scope.getUserProfile('User1');
    }
  };

  $scope.searchTrailsApi = (city, lat, lon) => {
    getHikeApiService.searchTrailsApi(city, lat, lon)
    .then(searchResults => $scope.searchResults = searchResults);
  };

  $scope.saveCompletedHike = (username, hike) => {
    postHikeService.saveCompletedHike(username, hike)
    .then(hike => console.log('hike added to completed', hike));
  };

  $scope.saveWishlistHike = (username, hike) => {
    postHikeService.saveWishlistHike(username, hike)
    .then(hike => console.log('hike added to wishlist', hike));
  };

  // sets the current hike to display in hikeProfile.html
  $scope.hikeInfo = function(name, description, directions) {
    $scope.hike.name = name;
    $scope.hike.description = description;
    $scope.hike.directions = directions;
  };

  // deletes a wishlist hike and moves it to completed hikes
  $scope.moveToCompleted = function(index) {
    var completedTrail = $scope.userProfile.wishlist.splice(index, 1)
    $scope.userProfile.completeds.push(completedTrail);
  };

  // initialize the current view
  $scope.viewState = 'userProfile';

  // initialize the user account
  $scope.getUserProfile('User1');

  // initialize the current hike
  $scope.hike = {
    name: '',
    description: '',
    directions: ''
  };

});

