angular.module('hikingApp')
.controller('appController', ($scope, getHikeApiService, getHikeService, postHikeService) => {

  // @test: Create a default user.
  $scope.user = {
    name: 'User3',
    completed: null,
    wishlist: null
  };

  // init starting view
  $scope.viewState = 'userProfile'
  // control views
  $scope.changeViewState = (page) => {
    $scope.viewState = page;
    console.log('changed view to ', $scope.viewState);
  };

  // query the api
  $scope.searchTrailsApi = (city, lat, lon) => {
    console.log('ran searchTrailsApi');
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
  $scope.getUserProfile = (username) => {
    getHikeService.getUserProfile(username)
    .then(response => {
      $scope.userProfile = response.data;  // expose userProfile
      console.log('Return from getUserProfile():', $scope.userProfile);
    })
    .catch((err) => {
      console.log('error retrieving user profile..');
    });
  };

  // create a new user
  $scope.saveUser = (username) => {
    postHikeService.saveUser(username)
    .then(username => console.log('succesfully created new user'));
  };

  $scope.hike = {
    name: '',
    description: '',
    directions: ''
  };

  $scope.hikeInfo = function(name, description, directions) {
    console.log("PROFILE", name, description, directions);
    $scope.hike.name = name;
    $scope.hike.description = description;
    $scope.hike.directions = directions;
  };

});

