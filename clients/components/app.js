angular.module('hikingApp', [])

.config(($sceDelegateProvider) => {
  // allows angular to load files locally
  $sceDelegateProvider.resourceUrlWhitelist([
    'self'
  ]);
})