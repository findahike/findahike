anguler.module('hikingApp')
.factory('openTrailProfile', ($scope, $http) => {
  $http({
    method: 'GET',
    url: '/api/trail/profile' //<---- need trail id?
  })
  .success((data) => {
    //populate template with info from data
  })
  .error((data, status) => {
    console.log(status, 'error opening trail profile');
  });
});