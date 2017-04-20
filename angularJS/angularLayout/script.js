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
				 		.when("/students/:ID", {
				 			templateUrl: "templates/studentDetails.html",
				 			controller: "studentDetailsController"
				 		})
				 		.otherwise({
				 			redirectTo: "/home"
				 		})
			 		$locationProvider.html5Mode(true);
				 })
				 .controller("homeController", function($scope) {
				 	$scope.message = "Home Page";
				 })
				 .controller("coursesController", function($scope) {
				 	$scope.courses = ["C#", "VB.NET", "SQL Server", "ASP.NET"];
				 })
				 .controller("studentsController", function($scope, $http) {
				 	$http.get("http://localhost/exercises/lesson25.php")
				 		 .then(function(response) {
							$scope.students = response.data;
				 		 })
				 })
	            .controller("studentDetailsController", function ($scope, $http, $routeParams) {
	                $http({
	                    url: "http://localhost/exercises/lesson25.php",
	                    method: "get",
	                    params: { id: $routeParams.id }
	                }).then(function (response) {
	                    $scope.student = response.data;
	                })
	            })