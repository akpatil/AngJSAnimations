var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(function($routeProvider) {
	$routeProvider

	.when('/home', {
		templateUrl: 'home.html',
		controller: 'homeController'
	})

	.when('/contact', {
		templateUrl: 'contact.html',
		controller: 'contactController'
	})

	.when('/about', {
		templateUrl: 'about.html',
		controller: 'aboutController'
	});
});

myApp.controller('homeController', function($scope) {
	$scope.pageClass = "home";
});

myApp.controller('contactController', function($scope) {
	$scope.pageClass = "contact";
});

myApp.controller('aboutController', function($scope) {
	$scope.pageClass = "about";
});