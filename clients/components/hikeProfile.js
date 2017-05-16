angular.module('hikingApp')

.directive('hikeProfile', () => {
  return {
    restrict: 'E',
    scope: {
      changeViewState: '<', //allows user to change pages function is on appController.js
      hike: '<',            //passes individual hike details
      saveWishlistHike: '<' //allows user to save hikes from hikeProfile to user profile function is on appController.js & postHikeService.js
    },
    controller: ($scope) => {
    },
    controllerAs: 'hikeProfile',
    bindToController: true,
    templateUrl: 'clients/templates/hikeProfile.html'
  };
});