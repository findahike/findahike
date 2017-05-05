angular.module('hikingApp')
.factory('findCompletedHikes', ($scope, $http) => {
  $http({
    method: 'GET',
    url: '/api/user/completedHikes'  //<----need user id?
  })
  .success((data) => {
    data.forEach((hikeObj) => {
      //push each hike obj into some array
    });
  })
  .error((data, status) => {
    console.log(status, 'error receiving completed hikes');
  });
})
.factory('findWishListHikes', ($scope, $http) => {
  $http({
    method: 'GET',
    url: '/api/user/wishListHikes' //<----need user id?
  })
  .success((data) => {
    data.forEach((hikeObj) => {
      //push each hike obj into some array
    })
  })
  .error((data, status) => {
    console.log(status, 'error receiving wish list hikes');
  });
})
