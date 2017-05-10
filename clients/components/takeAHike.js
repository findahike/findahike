angular.module('hikingApp')

// Search hikes
.directive('takeAHike', () => {
 return {
   restrict: 'E',
   scope: {
     trails: '<',
     onClick: '<'
   },
   controller: () => {

     //runs through trail array and sorts each object by the search value.
     //when we call the function on the click, we will need to pass in both parameters
     this.filter = (trails, searchVal) => {
       return trails.sort(function(obj1, obj2){
         return obj1[searchVal] - obj2[searchVal];
       });
     };
   },
   controllerAs: 'ctrl',
   bindToController: true,
   templateUrl: '../templates/takeAHike.html'
 };
});