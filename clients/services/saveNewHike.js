angular.module('hikingApp')
.factory('saveWishListHike', ($scope, $http, data) => {
  $http({
    method: 'POST',
    url: 'api/user/wishListHike', //<----need user id?
    data: JSON.stringify({
      id: $scope.data.trailId,
      name: $scope.data.trailName,
      description: $scope.data.trailDescription,
      userId: $scope.data.userId
    })
  })
  .success((data) => {
    console.log(data, 'Wish List Hike Saved');
  })
  .error((data, status) => {
    console.log(status, 'error saving wish list hike');
  });
})
.factory('saveCompletedHike', ($scope, $http, data) => {
  $http({
    method: 'POST',
    url: 'api/user/completedHike', //<----need user id?
    data: JSON.stringify({
      id: $scope.data.trailId,
      name: $scope.data.trailName,
      description: $scope.data.trailDescription,
      userId: $scope.data.userId
    })
  })
  .error((data, status) => {
    console.log(status, 'error saving completed hike');
  });
});