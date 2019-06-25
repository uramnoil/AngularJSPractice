'use strict';

// Declare app level module which depends on views, and core components
var app = angular.module('App', [
]);

app.controller("AppController", function($scope){
   $scope.onClick = function(){
       $scope.text = $scope.displayText;
   };

   $scope.names = [
       {firstName:"Nakamura", lastName:"a"},
       {firstName:"aaa", lastName:"aaaa"}
   ];

});