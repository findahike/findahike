anguler.module('hikingApp')
.service('saveCompletedHike', ($http, data) => {
  this.saveCompletedHike = (data) => {
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
    .success((data) => {
      console.log(data, 'Completed hike saved');
    })
    .error((data, status) => {
      console.log(status, 'error saving completed hike');
    });
  };
})