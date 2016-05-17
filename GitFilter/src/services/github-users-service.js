angular.module('angularApplication')
.factory('GithubUsersService', 
		['$http', 'GithubUserService', function($http, GithubUserService) {
	return {
		getUsers: function(callback) {
			$http({
				method: 'GET',
				url: 'https://api.github.com/users',
			}).then(
				function successCallBack(response){
					response.data.forEach(function(userItem, itemIndex, itemsArray) {
						GithubUserService.getUserInfo(userItem.login, function(userInfo){
							callback(userInfo);
						});
					});
				},
				function errorCallBack(response){
					// TODO: add some error message
				});
		}
	}
}]);