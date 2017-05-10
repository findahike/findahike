   angular.module('starApp', [])
   .controller('StarCtrl', ['$scope', function ($scope) {
    $scope.ratings = [{
        name: 'Intensity',
        current: 3,
        max: 5
    },
    {
        name: 'Scenic Rating',
        current: 3,
        max: 5
    },
    {
        name: 'Hikers Rating',
        current: 3,
        max: 5
    },
    {
        name: 'Cell Reception',
        current: 3,
        max: 5
    }
    ];
}])
.directive('starRating', function () {
    return {
        restrict: 'A',
        template: '<ul class="rating">' +
            '<li ng-repeat="star in stars" ng-class="star">' +
            '\u2605' +
            '</li>' +
            '</ul>',
        scope: {
            ratingValue: '=',
            max: '='
        },
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

angular.bootstrap(document.getElementById("App2"), ['starApp']);





