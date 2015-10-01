var effortlessEnglishApp = angular.module('EffortlessEnglishApp', []);

effortlessEnglishApp.controller('HomeController', ['$scope', function($scope) {
	$scope.name = 'Huy';
}]);

effortlessEnglishApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'view/home.html',
			controller: 'HomeController'
		});
}]);