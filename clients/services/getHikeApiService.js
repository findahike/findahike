angular.module('hikingApp')

.service('getHikeApiService', ($http, city) => {

  this.searchTrailsApi = (city) => {

    var apiParams = {
      url ='https://trailapi-trailapi.p.mashape.com/',
      limit = 'limit=25',
      activity = 'q[activities_activity_type_name_eq]=hiking',
      city = 'q[city_cont]=' + city,
      radius = 'radius=25'
    };

    $http({
      url: `${apiParams.url}?${apiParams.limit}&${apiParams.activity}&${apiParams.city}&${apiParams.radius}`,
      method: 'GET',
      dataType: 'json',
      headers: {
        "X-Mashape-Authorization": "By0afuBqQKmshwWHnoeEyP355rW1p1BjdbyjsnCIx9rkj4ljar",
        'Content-Type':'application/x-www-form-urlencoded'
      }
    })
    .then((results) => {
      console.log('successfully connected to trails api', results);
      var hikes = [];

      results.places.forEach((entry) => { // extract data of interest
        var hike = {};
        hike.directions = entry.directions;
        hike.lat = entry.lat;
        hike.lon = entry.long;
        entry.activites.forEach((activity) => {
          hike.name = activity.name;
          hike.description = activity.description;
          hike.url = activity.url;
        });
        hikes.push(hike);
      });

      callback(hikes);
    })
    .catch((err) => {
      console.log('error connecting to trails api', err);
    });
  };

})