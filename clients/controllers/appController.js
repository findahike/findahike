angular.module('hikingApp')
.controller('appController', ($scope, getHikeApiService, getHikeService, postHikeService) => {

  // @test: Create a default user.
  // $scope.user = {
  //   name: 'User3',
  //   completed: null,
  //   wishlist: null
  // };

  $scope.viewState = 'userProfile' // init default view

  $scope.changeViewState = (page) => {
    $scope.viewState = page;
    console.log('changed view to ', $scope.viewState);
    if (page === 'userProfile') { // janky way of auto refreshing userprofile page
      $scope.getUserProfile('User1');
    }
  };

  $scope.searchTrailsApi = (city, lat, lon) => {
    console.log('ran searchTrailsApi');
    getHikeApiService.searchTrailsApi(city, lat, lon)
    .then(searchResults => $scope.searchResults = searchResults);
  };

  $scope.saveCompletedHike = (username, hike) => {
    // decorate hike with user input
    // hike.recommendation = $scope.recommendation;
    // hike.cellphoneReception = $scope.cellphoneReception;
    // hike.intensity = $scope.intensity;
    // hike.scenic = $scope.scenic;
    // hike.rating = $scope.rating;
    postHikeService.saveCompletedHike(username, hike)
    .then(hike => console.log('hike added to completed', hike));
  };

  $scope.saveWishlistHike = (username, hike) => {
    // decorate hike with user input
    // hike.recommendation = $scope.recommendation;
    // hike.cellphoneReception = $scope.cellphoneReception;
    // hike.intensity = $scope.intensity;
    // hike.scenic = $scope.scenic;
    // hike.rating = $scope.rating;
    postHikeService.saveWishlistHike(username, hike)
    .then(hike => console.log('hike added to wishlist', hike));
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
  $scope.getUserProfile('User1');
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

