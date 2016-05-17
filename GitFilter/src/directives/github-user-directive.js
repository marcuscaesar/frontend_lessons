angular.module('angularApplication')
.directive('githubUser', function() {
	return {
		template: "" + 
			"<li class='mdl-list__item mdl-list__item--two-line'>" +
				"<div class='item-avatar'>" +
					"<img src='{{githubUserInfo.avatar_url}}'/>" +
				"</div>" +	
				"<span class='mdl-list__item-primary-content'>" +
					"<span>{{githubUserInfo.name}}</span>" +
					"<span class='mdl-list__item-sub-title'>User login: {{githubUserInfo.login}}</span>" +
				"</span>" +
			"</li>"
	};
});
