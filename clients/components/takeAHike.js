angular.module('hikingApp')

// Search hikes
.directive('takeAHike', function() {
  return {
    controller: function() {

    },
    bindToController: true,
    controllerAs: 'ctrl'  /////////////////////////////// PAY ATTENTIOn
    templateUrl: '../templates/takeAHike.html'
  }
});