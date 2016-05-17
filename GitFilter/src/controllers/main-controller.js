angular.module('angularApplication')
.controller('applicationController', 
		['$scope', '$http', 'GithubUsersService', 
		 function($scope, $http, GithubUsersService){
	$scope.githubUsersInfo = [];
	
	GithubUsersService.getUsers(function(userInfo) {
		$scope.githubUsersInfo.push(userInfo);
	});
}]);