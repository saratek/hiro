/**
 * Created by Asmaa on 02/02/2015.
 */


var app = angular.module('hiroApp', []);

app.controller('trendingTopicsCtrl', function($scope, $http) {
    $http.post('/', {action:'trouverTout'}).success(function(data) {
        $scope.trendingTopicsList = data.tt;
    });

    //init
    $scope.trendingTopicsList = [];


});