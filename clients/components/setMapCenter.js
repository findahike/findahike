angular.module('hikingApp')

.directive('setMapCenter', () => {
  return {
    controller: () => {

    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'hikeProfile.html'
  };
});