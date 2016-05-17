angular.module('angularApplication')
.factory('GithubUsersService', ['$http', 'GithubUserService', function($http, GithubUserService) {
  return {
    getUsers: function(numUsersPerPage, callback) {
      $http({
        url: 'https://api.github.com/users',
        method: 'GET',
        params: {
        	per_page: numUsersPerPage
        }
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
    },

    getMoreUsers: function(lastUserId, numUsersPerPage, callback) {
      $http({
        url: 'https://api.github.com/users',
        method: 'GET',
        params: {
        	since: lastUserId, 
        	per_page: numUsersPerPage
        }
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