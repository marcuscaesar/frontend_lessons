angular.module('angularApplication')
.controller('applicationController', 
		['$scope', '$http', 'GithubUsersService', 'userNameFilter',
		 function($scope, $http, GithubUsersService, userNameFilter){
	$scope.githubUsersInfo = [];
	
	GithubUsersService.getUsers(function(userInfo) {
		$scope.githubUsersInfo.push(userInfo);
	});
}]);