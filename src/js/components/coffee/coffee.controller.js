(function() {

  'use strict';

  angular
    .module('myApp.components.coffee', [])
    .controller('coffeeController', coffeeController);

  coffeeController.$inject = ['coffeeService'];

  function coffeeController(coffeeService) {
    /*jshint validthis: true */
    var vm = this;

    vm.greeting = 'coffee World!';
    console.log(coffeeService.hello);
  }

})();
