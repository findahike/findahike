angular.module('hikingApp')

.directive('userProfile', () => {
  return {
    restrict: 'E',
    scope: {
      changeViewState: '<',
      searchTrailsApi: '<',
      searchResults: '<',
      setLatLon: '<',
      filter: '&',
      getUserProfile: '<'
    },

    controller: ($scope) => {
      console.log('i am in userProfile directive ',$scope.userProfile.getUserProfile);
      // load profile
      // $scope.userProfile.getUserProfile('andrew');
    },
    controllerAs: 'userProfile',
    bindToController: true,
    templateUrl: 'clients/templates/user.html'
  };
});