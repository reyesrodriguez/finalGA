var finalNode = angular.module('finalNode', ['ngRoute']);


finalNode.config(['$routeProvider', function ($routeProvider) {
	$routeProvider

	.when("/", {templateUrl: "partials/home.html", controller: "mainController"})
	.when("/data", {templateUrl: "partials/data.html", controller: "PageController"}, {reloadOnSearch: false})
	.otherwise("/404", {templateUrl: "partials/404.html", controller: "PageController"})
	}]);

finalNode.controller('PageController', function(){
	console.log("hello everybody!!");


});
