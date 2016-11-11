angular.module('app',['ui.router'])
.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider.state({
		name : "home",
		url : "/",
		templateUrl : "/client/views/home.html"
	});
	$stateProvider.state({

		name : "about",
		url : "/about",
		templateUrl : "/client/views/about.html"

	});

}]);