angular.module('hikingApp')

.directive('hikeProfile', () => {
  return {
    restrict: 'E',
    scope: {
      changeViewState: '<',
      hike: '<',
      saveWishlistHike: '<'
    },
    controller: ($scope) => {
    },
    controllerAs: 'hikeProfile',
    bindToController: true,
    templateUrl: 'clients/templates/hikeProfile.html'
  };
});