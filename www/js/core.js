var effortlessEnglishApp = angular.module('EffortlessEnglishApp', ['ngRoute']);

effortlessEnglishApp.controller('HomeController', ['$scope', '$location', function($scope, $location) {
	$scope.name = 'Huy';

	$scope.navigate = function(view) {
	}
}]);


effortlessEnglishApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'view/home.html',
			controller: 'HomeController'
		})
		.when('/second', {
			templateUrl: 'view/second.html',
			controller: 'HomeController'
		});
}]);