(function () {
  'use strict';

  angular
    .module('hikingApp')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['authService'];

  function LoginController(authService) {

    var vm = this;
    vm.authService = authService;

  }

}());
