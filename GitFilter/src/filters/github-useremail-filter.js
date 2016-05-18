angular.module('angularApplication')
.filter('userEmail', function() {
  return function(usersArray, userEmailFilterString) {
    if (userEmailFilterString == null || userEmailFilterString.length == 0) {
    	return usersArray;
    }
    
    var filteredArray = [];
	usersArray.forEach(function(item, itemIndex, itemArray) {
		if (item.email != null && item.email.indexOf(userEmailFilterString) > -1) {
			filteredArray.push(item);
		}
	});
    
    return filteredArray;
  }
});