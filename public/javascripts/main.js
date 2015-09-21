var finalNode = angular.module('finalNode', ['ngRoute']);

function mainController($scope, $http) {
    $scope.formData = {};

   
    $http.get('/api/entities')
        .success(function(data) {
            $scope.entities = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createEntity = function() {
        $http.post('/api/entities', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; 
                $scope.entities = data;
                $scope.formData = {};
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete 
    $scope.deleteEntity = function(id) {
        $http.delete('/api/entities/' + id)
            .success(function(data) {
                $scope.entities = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}


