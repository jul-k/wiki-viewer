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
        $.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro=&explaintext=&exsentences=1&exlimit=max&gsrsearch='+
        $scope.search +
        '&callback=\?', function(res){
              $scope.resultList = res.query.pages;
          });
    };

    $scope.checkIfEnterKeyWasPressed = function($event){
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
            $scope.getResults();
        }
    };

}]);
