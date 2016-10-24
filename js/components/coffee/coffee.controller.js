(function() {

  'use strict';

  angular
    .module('myApp.components.coffee', [])
    .controller('coffeeController', coffeeController);

  coffeeController.$inject = ['$scope'];

  function coffeeController($scope) {
    /*jshint validthis: true */
    this.greeting = 'coffee World!';
  }

})();
