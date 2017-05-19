angular.module('hikingApp')

.service('getHikeApiService', function($http) {

  this.searchTrailsApi = (city, lat, lon) => {

    var apiParams = {
      city: `q[city_cont]=${city}`,
      url:'https://trailapi-trailapi.p.mashape.com/',
      limit: 'limit=25',
      activity: 'q[activities_activity_type_name_eq]=hiking',
      radius: 'radius=25'
    };

    // if lat or lon are supplied use them, otherwise clear their query fields
    lat ? apiParams.lat : apiParams.lat = '';
    lon ? apiParams.lon : apiParams.lon = '';

    return $http({
      url: `${apiParams.url}?${apiParams.limit}&${apiParams.activity}&${apiParams.city}&${apiParams.radius}&${apiParams.lat}&${apiParams.lon}`,
      method: 'GET',
      dataType: 'json',
      headers: {
        "X-Mashape-Authorization": "By0afuBqQKmshwWHnoeEyP355rW1p1BjdbyjsnCIx9rkj4ljar",
        'Content-Type':'application/x-www-form-urlencoded'
      }
    })
    .then(results => {
      var searchResults = results.data.places.map(city => { // extract data of interest
        var hike = {};
        hike.directions = city.directions;
        hike.lat = city.lat;
        hike.lon = city.lon;
        city.activities.forEach(activity => {
          hike.place_id = activity.place_id;
          hike.name = activity.name;
          hike.description = activity.description;
          hike.url = activity.url;
        });
        return hike;
      });
      return searchResults;
    })
    .catch((err) => {
      console.log('error connecting to trails api', err);
    });
  };

});