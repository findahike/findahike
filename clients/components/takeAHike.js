angular.module('hikingApp')

// Search hikes
.directive('takeAHike', () => {
 return {
   restrict: 'E',
   scope: {
     searchTrailsApi: '<',
     searchResults: '<',
     filter: '&'
   },
   controller: ($scope) => {

    console.log($scope);

     //runs through trail array and sorts each object by the search value.
     //when we call the function on the click, we will need to pass in both parameters
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