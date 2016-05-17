angular.module('angularApplication')
.filter('userName', function() {
  return function(usersArray, userNameFilterString) {
    if (userNameFilterString == null || userNameFilterString.length == 0) {
    	return usersArray;
    }
    
    var filteredArray = [];
    usersArray.forEach(function(item, itemIndex, itemArray) {
      if (item.login.indexOf(userNameFilterString) > -1) {
        filteredArray.push(item);
      }
    });

    return filteredArray;
  }
});
