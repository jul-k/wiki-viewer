'use strict';

/**
 * @ngdoc function
 * @name wikiViewerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wikiViewerApp
 */
var app = angular.module('wikiViewerApp');

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.resultList = [];

    $scope.search = '';

    $scope.getResults = function () {
        $.getJSON('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='+
        $scope.search +
        '&format=json&callback=\?', function(res){
            console.log(res);
              $scope.resultList = res.data;
          });
    };


}]);
