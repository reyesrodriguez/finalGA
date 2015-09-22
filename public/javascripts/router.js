var finalNode = angular.module('finalNode', ['ngRoute']);


finalNode.config(['$routeProvider', function ($routeProvider) {
	$routeProvider

	.when("/", {templateUrl: "partials/home.html", controller: "mainController"})
	.when("/data", {templateUrl: "partials/data.html", controller: "mainController"}, {reloadOnSearch: false})
	.when("/datalog", {templateUrl: "partials/datalog.html", controller: "mainController"})
	.otherwise("/404", {templateUrl: "partials/404.html", controller: "PageController"})
	}]);

finalNode.controller('PageController', function(){
	console.log("hello everybody!!");


});

var validationApp = angular.module('validationApp', []);

validationApp.controller('mainController', function($scope){
	$scope.submitForm = function(isValid){
		if(isValid){
			alert('yes!!!');
		}
	};
});
