angular.module('hikingApp')

// Search hikes
.directive('takeAHike', () => {
  return {
    restrict: 'E',
    scope: {
      changeViewState: '<', //allows user to change pages function is on appController.js
      searchTrailsApi: '<', //sends a get request to trailsAPI function is on appController.js and uses getHikeApiService.js
      searchResults: '<', //holds results from trailsAPI
      hikeInfo: '<',  //individual hike object
      setLatLon: '<', //function to grab the latitude and longitude to send to the map function is on mapController.js
      filter: '&' //allows user to filter search results function is on line 29
    },
    controller: ($scope) => {
      // this.hikeInfo = function(name, description, directions) {
      //   console.log("PROFILE", name, description, directions);
      //   this.hikeName = name;
      //   this.hikeDescription = description;
      //   this.hikeDirections = directions;
      // }
      $scope.click = function(e) {
        console.log('HELLOOOO', e);
      };
      console.log($scope);

     //runs through trail array and sorts each object by the search value.
      $scope.filter = (searchResults, searchVal) => {
        return searchResults.sort(function(obj1, obj2){
          return obj1[searchVal] - obj2[searchVal];
        });
      };
    },
    controllerAs: 'takeAHike',
    bindToController: true,
    templateUrl: 'clients/templates/takeAHike.html'
  };
});