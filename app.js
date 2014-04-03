(function() {
'use strict';
var module = angular.module('app', []);

module.directive('myDirective', function() { return {
    restrict: 'E',
    templateUrl: 'my-template.html',
    scope: {},
    controller: function($scope,$http) {
        $http.get('api.json').then( function(promise) {
            angular.extend($scope,promise.data);
        });
    },
}});

}());
