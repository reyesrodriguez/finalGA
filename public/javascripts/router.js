var finalNode = angular.module('finalNode', ['ngRoute']);


finalNode.config(['$routeProvider', function ($routeProvider) {
	$routeProvider

	.when("/", {templateUrl: "partials/home.html", controller: "mainController"})
    .when("/about", {templateUrl: "partials/about.html", controller: "mainController"})
	.when("/home", {templateUrl: "partials/home.html", controller: "mainController"})
	.when("/data", {templateUrl: "partials/data.html", controller: "mainController"}, {reloadOnSearch: false})
	.when("/datalog", {templateUrl: "partials/datalog.html", controller: "mainController"})
	.otherwise("/404", {templateUrl: "partials/404.html", controller: "PageController"})
	}]);

finalNode.controller('PageController', function(){
	console.log("hello everybody!!");


});

// var validationApp = angular.module('validationApp', []);

// validationApp.controller('mainController', function($scope){
// 	$scope.submitForm = function(isValid){
// 		if(isValid){
// 			alert('yes!!!');
// 		}
// 	};
// });
// finalNode.controller('AuthCtrl', [
// '$scope',
// '$state',
// 'auth',
// function($scope, $state, auth){
//   $scope.user = {};

//   $scope.register = function(){
//     auth.register($scope.user).error(function(error){
//       $scope.error = error;
//     }).then(function(){
//       $state.go('/#');
//     });
//   };

//   $scope.logIn = function(){
//     auth.logIn($scope.user).error(function(error){
//       $scope.error = error;
//     }).then(function(){
//       $state.go('/#');
//     });
//   };
// }])

// finalNode.controller('NavCtrl', [
// '$scope',
// 'auth',
// function($scope, auth){
//   $scope.isLoggedIn = auth.isLoggedIn;
//   $scope.currentUser = auth.currentUser;
//   $scope.logOut = auth.logOut;
// }]);

// myApp.config(function($stateProvider, $urlRouterProvider) {
//   //
//   // For any unmatched url, redirect to /state1
//   $urlRouterProvider.otherwise("/login");
//   //
//   // Now set up the states
//   $stateProvider
//     .state('login', {
//       url: "/login.html",
//       templateUrl: "partials/login.html"
//     controller: 'NavCtrl',
//   onEnter: ['$state', 'auth', function($state, auth){
//     if(auth.isLoggedIn()){
//       $state.go('home');
//     }
//   }]
// })
// .state('register', {
//   url: '/register',
//   templateUrl: '/register.html',
//   controller: 'NavCtrl',
//   onEnter: ['$state', 'auth', function($state, auth){
//     if(auth.isLoggedIn()){
//       $state.go('home');
//     }
//   }]
// });
