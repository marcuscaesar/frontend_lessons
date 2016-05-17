angular.module('angularApplication')
.directive('githubUser', function() {
  return {
	  template: "" +
	  "<li class='wide-element aligned-topic mdl-list__item mdl-list__item--two-line'>" +
	  "  <div class='item-avatar'>" +
	  "    <img src='{{userInfo.avatar_url}}'>" +
	  "  </div>" +
	  "  <div class='mdl-list__item-primary-content'>" +
	  "    <div>{{userInfo.name}}</div>" +
	  "    <div class='mdl-list__item-sub-title'>" +
	  "      <span><a href='mailto:{{userInfo.email}}'>{{userInfo.email}}</a></span>" +
	  "    </div>" +
	  "  </div>" +
	  "  <div class='mdl-list__item-secondary-content'>" +
	  "    <a class='mdl-button mdl-js-button' data-ng-click='displayMoreUserInfo(userInfo.login)'>" +
	  "      More..." +
	  "    </a>" +
	  "  </div>" +
	  "</li>"
  };
});
