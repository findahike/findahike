angular.module('hikingApp')

.directive('hikeProfile', () => {
  return {
    restrict: 'E',
    scope: {
      changeViewState: '<'
    },
    controller: ($scope) => {
      //console.log($scope);
    },
    controllerAs: 'takeAHike',
    bindToController: true,
    templateUrl: 'clients/templates/hikeProfile.html'
  };
});