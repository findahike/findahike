angular.module('hikingApp')

.directive('starRating', function () {
  return {
    restrict: 'A',
    //adds stars to list
    template: '<ul class="rating">' +
      '<li ng-repeat="star in stars" ng-class="star">' +
      '\u2605' +
      '</li>' +
      '</ul>',
    scope: {
      //passes ratingValue and max stars
      ratingValue: '=',
      max: '='
    },
    //finds rating number and marks that number of stars as filled to be colored
    link: function (scope, elem, attrs) {
      scope.stars = [];
      for (var i = 0; i < scope.max; i++) {
        scope.stars.push({
          filled: i < scope.ratingValue
        });
      }
    }
  };
});






