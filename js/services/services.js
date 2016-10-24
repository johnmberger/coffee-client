(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', coffeeService);

  coffeeService.$inject = ['$http'];

  function coffeeService($http) {
    /*jshint validthis: true */
    var vm = this;
    const requestURL = 'https://coffees.herokuapp.com/coffee/';

    vm.getAllCoffee = () => $http.get(requestURL);
    vm.getOneCoffee = (id) => $http.get(`${requestURL}${id}`);

  }

})();
