angular.module('hikingApp')

.service('getHikeApiService', ($http, city) => {

  this.searchTrailsApi = (city, lat, lon) => {

    var apiParams = {
      city: `q[city_cont]=${city}`,
      lat: `lat=${lat}`,
      lon: `lon=${lon}`,
      url:'https://trailapi-trailapi.p.mashape.com/',
      limit: 'limit=25',
      activity: 'q[activities_activity_type_name_eq]=hiking',
      radius: 'radius=25'
    };
    // need to do this or api query won't work?
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
      console.log('successfully connected to trails api', results);
      var searchResults = results.data.places.map(city => { // extract data of interest and return promise array of objects
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

})