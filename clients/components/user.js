angular.module('hikingApp')

.directive('user', () => {
  return {
    restrict: 'E',
    scope: {
      changeViewState: '<',
      searchTrailsApi: '<',
      searchResults: '<',
      setLatLon: '<',
      filter: '&'
    },

    controller: () => {

    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'clients/templates/user.html'
  };
});