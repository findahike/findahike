angular.module('hikingApp')

.directive('setMapCenter', () => {
  return {
    controller: () => {
      $scope.clickedMap()

    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'hikeProfile.html'
  };
});