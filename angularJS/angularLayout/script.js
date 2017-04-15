var app = angular.module("Demo", ["ngRoute"])
				 .config(function($routeProvider, $locationProvider) {
				 	$routeProvider
				 		.when("/home", {
				 			templateUrl: "templates/home.html",
				 			controller: "homeController"
				 		})
				 		.when("/courses", {
				 			templateUrl: "templates/courses.html",
				 			controller: "coursesController"
				 		})
				 		.when("/students", {
				 			templateUrl: "templates/students.html",
				 			controller: "studentsController"
				 		})
				 		$locationProvider.html5Mode(true);
				 })
				 .controller("homeController", function($scope) {
				 	$scope.message = "Home Page";
				 	console.log('OOKK');
				 })
				 .controller("coursesController", function($scope) {
				 	$scope.courses = ["C#", "VB.NET", "SQL Server", "ASP.NET"];
				 	console.log('OOKK');
				 })
				 .controller("studentsController", function($scope, $http) {
				 	$http.get("http://localhost/exercises/lesson25.php")
				 		 .then(function(response) {
							$scope.students = response.data;
				 	console.log('OOKK');
				 		 })
				 })

// var app = angular
//             .module("Demo", ["ngRoute"])
//             .config(function ($routeProvider) {
//                 $routeProvider
//                     .when("/home", {
//                         templateUrl: "templates/home.html",
//                         controller: "homeController"
//                     })
//                     .when("/courses", {
//                         templateUrl: "templates/courses.html",
//                         controller: "coursesController"
//                     })
//                     .when("/students", {
//                         templateUrl: "templates/students.html",
//                         controller: "studentsController"
//                     })
//             })
//             .controller("homeController", function ($scope) {
//                 $scope.message = "Home Page";
//             })
//             .controller("coursesController", function ($scope) {
//                 $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
//             })
//              .controller("studentsController", function ($scope, $http) {
//                  $http.get("http://localhost/exercises/3connectAngularJS/test.php")
//                                         .then(function (response) {
//                                             $scope.students = response.data;
//                                         })
//              })