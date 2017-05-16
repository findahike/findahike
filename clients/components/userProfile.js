angular.module('hikingApp')

.directive('userProfile', () => {
  return {
    restrict: 'E',
    scope: {
      changeViewState: '<', //allows user to change pages function is on appController.js
      searchTrailsApi: '<', //sends a get request to trailsAPI function is on appController.js and uses getHikeApiService.js
      searchResults: '<',   //holds results from trailsAPI
      setLatLon: '<',      //function to grab the latitude and longitude to send to the map function is on mapController.js
      filter: '&',        //allows user to filter search results function is on line takeAHike.js
      getUserProfile: '<', //grabs user information from database to populate the userProfile page function is on appController.js & getHikeService.js
      userData: '<',      //Individual user object
      saveCompletedHike: '<', //allows user to save hike as completed function is on appController.js & postHikeService.js
      moveToCompleted: '<'  //allows user to move hike from wishlist to completed function is on appController.js
    },

    controller: ($scope) => {

    },
    controllerAs: 'userProfile',
    bindToController: true,
    templateUrl: 'clients/templates/user.html'
  };
});