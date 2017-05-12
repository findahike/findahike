angular.module('hikingApp')

.directive('hikeProfile', () => {
  return {
    restrict: 'E',
    scope: {
      changeViewState: '<',
      hike: '<'
    },
    controller: ($scope) => {
    },
    controllerAs: 'takeAHike',
    bindToController: true,
    templateUrl: 'clients/templates/hikeProfile.html'
  };
});