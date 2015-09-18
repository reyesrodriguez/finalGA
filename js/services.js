// angular.module('finalNode.services', []).factory('Entity', function($resource){
// 	return $resource("http://localhost:8080/api/entities/:id", { id: '@_id'}, {
// 		update: {
// 			method: 'PUT'
// 		}
// 	});
// }).service('popupService',function($window){
//     this.showPopup=function(message){
//         return $window.confirm(message);
//     }
// });