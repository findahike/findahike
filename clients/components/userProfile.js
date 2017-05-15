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
      getUserProfile: '<',
      userData: '<',
      saveCompletedHike: '<'
    },

    controller: ($scope) => {
      // $scope.userProfile.getUserProfile('andrew');
    },
    controllerAs: 'userProfile',
    bindToController: true,
    templateUrl: 'clients/templates/user.html'
  };
});