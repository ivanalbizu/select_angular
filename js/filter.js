(function() {
  'use strict';

  angular
    .module('app')
    .filter('filterRange', function () {
      return function (input, min, max, step) {
        step = parseInt(step) || 30000;
        min = parseInt(min);
        max = parseInt(max);
        for (var i = min; i < max; i += step)
        input.push(i);
        return input;
      };
    });

})();
