(function() {

  'use strict';

  angular
    .module('myApp.components.coffee', [])
    .controller('coffeeController', coffeeController);

  coffeeController.$inject = ['coffeeService'];

  function coffeeController(coffeeService) {
    /*jshint validthis: true */
    var vm = this;

    vm.search = '';

    //-- form --//
    vm.form = false;
    vm.showForm = () => { vm.form = !vm.form; };
    vm.coffee = {};
    vm.addCoffee = () => {
      coffeeService.addCoffee(vm.coffee)
      .then(response => coffeeService.getAllCoffee())
      .then(data => vm.coffees = data.data.data)
      .catch(err => console.log(err));
      vm.coffee = {};
      vm.showForm();
    };

    //-- coffees --//
    vm.coffees = [];
    coffeeService.getAllCoffee()
    .then(data => vm.coffees = data.data.data)
    .catch(err => console.log(err));

  }

})();
