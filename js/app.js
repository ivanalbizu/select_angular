(function() {
  'use strict';

  angular
    .module('app', [])
    .controller('ListHouseCtrl', ListHouseCtrl);

    ListHouseCtrl.$inject = [];
    function ListHouseCtrl() {

      var vm = this;

      vm.selectPrice = {
        min: 30000,
        max: 120000
      }

      vm.log = function() {
        console.log(vm.selectPrice);
      }

    }

})();
