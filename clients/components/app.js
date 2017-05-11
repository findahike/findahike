angular.module('hikingApp', ['ngMap'])

.config(($sceDelegateProvider) => {
  // allows angular to load files locally
  $sceDelegateProvider.resourceUrlWhitelist([
    'self'
  ]);
});