angular.module('angularApplication')
.directive('githubUser', function() {
	return {
		template: "" +
      "<div class='wide-element mdl-card mdl-shadow--2dp'>" +
      "  <div class='aligned-topic mdl-card__title'>" +
      "    <div class=\'item-avatar\'>" +
      "      <img src='{{githubUserInfo.avatar_url}}'/>" +
      "    </div>" +
      "    <div>" +
      "      <span class='mdl-card__title-text'>{{githubUserInfo.name}}</span> " +
      "      <span><a href='mailto:{{githubUserInfo.email}}'>{{githubUserInfo.email}}</a></span>" +
      "    </div>" +
      "  </div>" +
      "  <div class='mdl-card__supporting-text'>" +
      "    <b>{{githubUserInfo.name}}</b> joined GitHub at {{githubUserInfo.created_at.substring(0, 10)}}." +
      "    <p>" +
      "    Now has {{githubUserInfo.followers}} followers and {{githubUserInfo.public_repos}} public repositories." +
      "  </div>" +
      "  <div class='mdl-card__actions mdl-card--border'>" +
      "    <a class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect' ng-click='displayMoreUserInfo()'>" + 
      "      More..." + 
      "    </a>" +
      "  </div>" +
      "</div>"
	};
});
