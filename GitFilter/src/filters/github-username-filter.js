angular.module('angularApplication')
.filter('userName', function() {
  return function(input, parameterOne) {
    return input;
  }
});