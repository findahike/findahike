angular.module('hikingApp')
.service('searchTrailsApi', ($http, city) => {
  this.searchTrailsApi = function(city) {
    console.log('THIS IS THE INPUT CITY', city);
      $http({
        url: `https://trailapi-trailapi.p.mashape.com/?limit=25&q[activities_activity_type_name_eq]=hiking&q[city_cont]=${city}&radius=25` ,
        method: 'GET',
        dataType: 'json',
        headers: {
        "X-Mashape-Authorization": "By0afuBqQKmshwWHnoeEyP355rW1p1BjdbyjsnCIx9rkj4ljar",
        'Content-Type':'application/x-www-form-urlencoded'
      }
    }).success((response) => {
      console.log(response, 'connected to trailApi');
    })
    .error((status, response) => {
      console.log(status, 'error connecting to trailApi');
    });
  };
});