angular.module('hikingApp');
  .controller('getTrailsCtrl', function($scope, $http) {

    $scope.searchTrailsApi = function(city) {
      console.log('THIS IS THE INPUT CITY', city);
      $http({
        url: 'https://trailapi-trailapi.p.mashape.com/',
        method: 'GET',
        data: {
          'q[activities_activity_type_name_eq]': 'hiking',
          'q[city_cont]': city
        }
        dataType: 'json',
        headers: {
          "X-Mashape-Authorization", "9O9keAxJxLmshmdXyniXY16RuAKtp1h06Ldjsn6f7qf7dIfGQr"
          'Content-Type':'application/x-www-form-urlencoded'
        }
      }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log(response);
      })
    }

  });