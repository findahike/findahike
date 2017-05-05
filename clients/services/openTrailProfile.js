anguler.module('hikingApp')

.service('openTrailProfile', ($http) => {
  this.openTrailProfile = () => {
    $http({
      method: 'GET',
      url: '/api/trail/profile' //<---- need trail id?
    })
    .then((profile) => {
      console.log('successfully retrieved profile information from database');
      // TODO: populate template with info from data
    })
    .catch((err) => {
      console.log('error retrieving profile information from database');
      // TODO: HANDLE ERROR
    });
  }
})