angular.module('hikingApp')

.controller('StarCtrl', ['$scope', function ($scope) {
  $scope.ratings = [{
    name: 'Intensity',
    current: 3,
    max: 5
  },
  {
    name: 'Scenic Rating',
    current: 3,
    max: 5
  },
  {
    name: 'Hikers Rating',
    current: 3,
    max: 5
  },
  {
    name: 'Cell Reception',
    current: 3,
    max: 5
  }];
}]);

angular.bootstrap(document.getElementById("App2"), ['hikingApp']);