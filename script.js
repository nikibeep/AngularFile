

var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "template1.html",
    controller: "firstController"
  }).when("/template2", {templateUrl: "template2.html",controller: "secondController"}).when("/template3", {templateUrl: "template3.html",controller: "thirdController"});});
app.controller("firstController", function($scope) {
  $scope.message = "Hello World!";
});
      
app.controller("secondController", function($scope, $http) {
$http.get("https://api.github.com/repos/user/repo/contents/file.json").then(function(response) {
            $scope.jsonData = response.data;
          });
        });
      
app.controller("thirdController", function($scope, $http) {
  $http.get("https://api.github.com/repos/user/repo/contents/file.json").then(function(response) {
    $scope.jsonData = response.data;
    $scope.search = function() {
      var searchText = $scope.searchText;
      var searchResults = [];
      for (const element of $scope.jsonData) {
        if (element.name.indexOf(searchText) !== -1) {
          searchResults.push(element);
        }
      }
      $scope.searchResults = searchResults;
    };
  });
});
