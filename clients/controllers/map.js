angular.module('hikingApp', ['ngMap'])
.controller('AerialRotateCtrl', function($scope, $interval, NgMap) {

  var vm = this;
  $scope.lat = 37.830811;
  $scope.lon = -122.524365;

  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    vm.map = map;
    var pos = {
      lat: $scope.lat,
      lng: $scope.lon
    }
    map.setCenter(pos);
  })

  vm.autoRotate = function() {
    if (vm.map.getTilt() != 0) {
      $interval(function() {
        var heading = vm.map.getHeading() || 0;
        vm.map.setHeading(heading + 90);
      }, 3000);
    }
  }

});