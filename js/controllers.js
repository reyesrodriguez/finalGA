// angular.module('finalNode', ['ngRoute']);
// angular.module('finalNode.controllers', []).controller('EntityListController', function($scope, $state, popupService, $window, Entity){
// 	$scope.entities = Entity.query();
	
// 	$scope.deleteEntity = function(entity) {
// 		if (popupService.showPopup("really?")) {
// 			entity.$delete(function(){
// 				$window.location.href = '';
// 			});
// 		}
// 	}
// }).controller('EntityViewController',function($scope, $stateParams, Entity){
// 	$scope.entity = Entity.get({ id: $stateParams.id}); 
// }).controller('EntityCreateController', function($scope, $state, $stateParams, Entity){
// 	$scope.entity = new Entity();

// 	$scope.AddEntity = function(){
// 		$scope.entity.$save(function(){
// 			$state.go('entities');
// 		});
// 	}
// }).controller('EntityEditController', function($scope, $state, $stateParams, Entity){
// 	$scope.updateEntity = function(){
// 		$scope.entity.$update(function(){
// 			$state.go('entities');
// 		});
// 	};
	
// 	$scope.loadEntity = function() {
// 		$scope.entity = Entity.get({ id: $stateParams.id});
// 	};

// 	$scope.loadEntity();

// });
	
