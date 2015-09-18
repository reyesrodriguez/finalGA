// angular.module('finalNode', ['ui.router', 'ngResource', 'finalNode.controllers', 'finalNode.services']);

// angular.module('finalNode').config(function($stateProvider, $httpProvider){
// 	$stateProvider.state('entities', {
// 		url: '/entities',
// 		templateUrl: 'partials/entities.html',
// 		controller: 'EntityListController'
// 	}).state('viewMovie', {
// 		url: '/entities/:id/view',
// 		templateUrl: 'partials/entity-view.html',
// 		controller: 'EntityViewController'
// 	}).state('newEntity', {
// 		url: '/entities/new',
// 		templateUrl: 'partials/entity-add.html',
// 		controller: 'EntityCreateController'
// 	}).state('editEntity', {
// 		url: '/entities/:id/edit',
// 		templateUrl: 'partials/entity-edit.html',
// 		controller: 'EntityEditController'
// 	});
// }).run(function($state){
// 	$state.go('entities');
// });