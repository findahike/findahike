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

    $http({
      url: `${apiParams.url}?${apiParams.limit}&${apiParams.activity}&${apiParams.city}&${apiParams.radius}&${apiParams.lat}&${apiParams.lon}`,
      method: 'GET',
      dataType: 'json',
      headers: {
        "X-Mashape-Authorization": "By0afuBqQKmshwWHnoeEyP355rW1p1BjdbyjsnCIx9rkj4ljar",
        'Content-Type':'application/x-www-form-urlencoded'
      }
    })
    .then((results) => {
      console.log('successfully connected to trails api', results);
      var searchResults = results.places.map((place) => { // extract data of interest and return promise array of objects
        var hike = {};
        hike.directions = place.directions;
        hike.lat = place.lat;
        hike.lon = place.long;
        place.activites.forEach((activity) => {
          hike[place_id] = activity[place_id];
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