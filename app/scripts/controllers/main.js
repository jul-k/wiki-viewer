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
    $scope.marginTop = 'marginTopBefore'

    $scope.getResults = function () {

        $.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro=&explaintext=&exsentences=1&exlimit=max&gsrsearch='+
        $scope.search +
        '&callback=\?', function(res){
            if (res.query) {
              $scope.resultList = res.query.pages;
          } else {
              notie.alert(3, "Not found :( Try something else.", 3);
          }
            var myArray = $.map($scope.resultList, function(value, index) {
                return value;
            });

            if (myArray.length > 0) {
                $scope.marginTop = 'marginTopAfter';
            } else {
                $scope.marginTop = 'marginTopBefore';
                console.log("Not found");
            }

            $scope.$apply();

        }).error(function (err) {
              notie.alert(3, "Oops... Try again later.", 3);
        });

    };

    $scope.checkIfEnterKeyWasPressed = function($event){
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
            $scope.getResults();
        }
    };

}]);
