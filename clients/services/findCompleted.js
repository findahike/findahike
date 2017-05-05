angular.module('hikingApp')

.service('findCompletedHikes', ($http) => {
  this.findCompletedHikes = () => {
    $http({
      method: 'GET',
      url: '/api/user/completedHikes'  //<----need user id?
    })
    .then((completedHikes) => {
      console.log('sucessfully retrieved completed hikes from database');
      // TODO: PARSE DATA AND RETURN
      // data.forEach((hike) => {
        //push hike into some collector variable
      // });
    })
    .catch((err) => {
      console.log('error retrieving completed hikes from database');
      // TODO: HANDLE ERROR
    });
  }
})
