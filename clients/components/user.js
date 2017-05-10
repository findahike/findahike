angular.module('hikingApp')

.directive('user', () => {
  return {
    controller: () => {

    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '../templates/user.html'
  };
});