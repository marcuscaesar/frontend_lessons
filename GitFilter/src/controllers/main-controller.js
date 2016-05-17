angular.module('angularApplication')
.controller('applicationController', 
		['$scope', '$http', 'GithubUsersService', 
		 'userNameFilter', 'userEmailFilter',
		 function($scope, $http, GithubUsersService, userNameFilter, userEmailFilter){
		  
  $scope.NUM_USERS_PER_PAGE = 30;
  
  $scope.allowedUsersCount = $scope.NUM_USERS_PER_PAGE;
  $scope.loadedUsers = [];
	
  $scope.readUsers = function() {
    GithubUsersService.getUsers($scope.NUM_USERS_PER_PAGE, function(userInfo) {
      if ($scope.loadedUsers.length < $scope.allowedUsersCount) {
        $scope.loadedUsers.push(userInfo);
      }
    });
  };
	
  $scope.readMoreUsers = function() {
    if ($scope.loadedUsers.length == 0) {
      $scope.readUsers();
    } else {
      $scope.allowedUsersCount += $scope.NUM_USERS_PER_PAGE;
      var lastUserId = $scope.loadedUsers[$scope.loadedUsers.length - 1].id;
      GithubUsersService.getMoreUsers(
          lastUserId, $scope.NUM_USERS_PER_PAGE, function(userInfo) {
        if ($scope.loadedUsers.length < $scope.allowedUsersCount) {
          $scope.loadedUsers.push(userInfo);
        }
      });
    }
  };

  $scope.displayMoreUserInfo = function(userLogin) {
    console.log("TODO: additional info will be shown for user: " + userLogin);
  }
  
  $scope.readUsers();
}]);