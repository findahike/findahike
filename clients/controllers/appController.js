angular.module('hikingApp')
.controller('appController', ($scope, getHikeApiService, getHikeService, postHikeService) =>{
  $scope.searchTrailsApi = getHikeApiService.searchTrailsApi;
  $scope.findCompletedHikes = getHikeService.findCompletedHikes;
  $scope.findWishListHikes = getHikeService.findWishListHikes;
  $scope.getTrailProfile = getHikeService.getTrailProfile;
  $scope.saveCompletedHike = postHikeService.saveCompletedHike;
  $scope.saveWishListHike = postHikeService.saveWishListHike;
})
// TODO: BREAK CONTROLLER INTO THESE PIECES:
//Shared Functions
//openHike - to open hike profile page - on user.html & takeAHike.html

//Take A Hike Functions

//User Profile Functions
//list completed hikes
//list saved hikes

//Hike Profile Functions
//openLgMap - open larger view of map given from API
//openGoogleMap - gets directions from googleMaps

//