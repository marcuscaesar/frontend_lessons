angular.module('angularApplication')
.controller('applicationController', 
		['$scope', '$http', 'GithubUsersService', 'userNameFilter',
		 function($scope, $http, GithubUsersService, userNameFilter){
		  
  $scope.NUM_USERS_PER_PAGE = 5;
  
  $scope.allowedUsersCount = $scope.NUM_USERS_PER_PAGE;
  $scope.githubUsersPage = [];
	
  $scope.readUsers = function() {
    GithubUsersService.getUsers(function(userInfo) {
      if ($scope.githubUsersPage.length < $scope.allowedUsersCount) {
        $scope.githubUsersPage.push(userInfo);
      }
    });
  };
	
  $scope.readMoreUsers = function() {
    if ($scope.githubUsersPage.length == 0) {
      $scope.readUsers();
    } else {
      $scope.allowedUsersCount += $scope.NUM_USERS_PER_PAGE;
      var lastUserId = $scope.githubUsersPage[$scope.githubUsersPage.length - 1].id;
      GithubUsersService.getMoreUsers(lastUserId, function(userInfo) {
        if ($scope.githubUsersPage.length < $scope.allowedUsersCount) {
          $scope.githubUsersPage.push(userInfo);
        }
      });
    }
  };

  $scope.displayMoreUserInfo = function(userLogin) {
    console.log("TODO: additional info will be shown for user: " + userLogin);
  }
  
  $scope.readUsers();
}]);