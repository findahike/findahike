angular.module('hikingApp')

.directive('login', () => {
  return {
    controller: () => {

    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '../templates/login.html'
  };
});