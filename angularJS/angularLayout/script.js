var app = angular.module("Demo", ["ngRoute"])
				 .config(function($routeProvider, $locationProvider) {
				 	$routeProvider.caseInsensitiveMatch = true;
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
				 .controller("studentsController", function($scope, $http, $route) {
				 	// Using $routeChangeStart
				 	// $scope.$on("$routeChangeStart", function(event, next, current) {
				 	// 	if(!confirm("Are you sure you want to navigate away from this page to " + next.$$route.originalPath)) {
				 	// 		event.preventDefault();
				 	// 	};
				 	// });
				 	// Using $locationChangeStart
				 	// $scope.$on("$locationChangeStart", function(event, next, current) {
				 	// 	if(!confirm("Are you sure you want to navigate away from this page to " + next)) {
				 	// 		event.preventDefault();
				 	// 	};
				 	// });
					$scope.$on("$locationChangeStart", function (event, next, current) {
					        $log.debug("$locationChangeStart fired");
					        $log.debug(event);
					        $log.debug(next);
					        $log.debug(current);
					    });
				    $scope.$on("$routeChangeStart", function (event, next, current) {
				        $log.debug("$routeChangeStart fired");
					        $log.debug(event);
					        $log.debug(next);
					        $log.debug(current);
				    });
				 	var vm = this;
				 	vm.reloadData = function() {
				 		$route.reload();
				 	}
				 	$http.get("http://localhost/exercises/lesson25.php")
				 		 .then(function(response) {
							$scope.students = response.data;
				 		 })
				 })
	            // .controller("studentDetailsController", function ($scope, $http, $routeParams) {
	            //     $http({
	            //         url: "http://localhost/exercises/lesson30.php",
	            //         method: "get",
	            //         params: { ID: $routeParams.ID }
	            //     }).then(function (response) {
	            //         $scope.student = response.data;
	            //     })
	            // })
	            .controller("studentDetailsController", function ($scope, $http, $routeParams) {
	            	console.log($routeParams.ID);
	            	$http.get("http://localhost/exercises/angularLayout/lesson30.php?ID="+$routeParams.ID)
				 		 .then(function(response) {
	                	console.log(response);
							$scope.student = response.data[0];
				 		 })
	            })