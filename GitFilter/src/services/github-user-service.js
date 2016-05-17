angular.module('angularApplication')
.factory('GithubUserService', ['$http', function($http) {
	return {
		getUserInfo: function(userLogin, callback) {
			var userInfo = {};
			
			$http({
        url: 'https://api.github.com/users/' + userLogin,
				method: 'GET',
			}).then(
				function successCallBack(response){
					callback(response.data);
				},
				function errorCallBack(response){
					// TODO: add some error message
				});
			
			return userInfo;
		}
	}
}]);