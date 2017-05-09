angular.module('hikingApp')

// Search hikes
.directive('takeAHike', () => {
  return {
    controller: () => {
      //runs through trail array and sorts each object by the search value.
      //when we call the function on the click, we will need to pass in both parameters
      $scope.filter = (trails, searchVal) => {
        return trails.sort(function(obj1, obj2){
          return obj1[searchVal] - obj2[searchVal];
        });
      };
    },
    templateUrl: '../templates/takeAHike.html'
  };
});
