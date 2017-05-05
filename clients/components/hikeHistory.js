angular.module('hikingApp')

.directive('hikeHistory', () => {
  return {
    controller: () => {

    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'hikeHistory.html'
  }
})