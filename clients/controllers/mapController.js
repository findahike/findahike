angular.module('hikingApp')

.controller('AerialRotateCtrl', function($scope, $interval, NgMap) {
  var vm = this;



  $scope.setLatLon = function (lat, lon) {
    console.log(lat, lon, 'inside mapController');
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      vm.map = map;
      var pos = {
        lat: lat,
        lng: lon
      };
      map.setCenter(pos);
    });
  };

  vm.autoRotate = function() {
    if (vm.map.getTilt() != 0) {
      $interval(function() {
        var heading = vm.map.getHeading() || 0;
        vm.map.setHeading(heading + 90);
      }, 3000);
    }
  };

});
