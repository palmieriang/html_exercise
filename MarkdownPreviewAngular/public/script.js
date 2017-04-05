var myApp = angular.module('myModule', ['ngSanitize', 'markdown']);

	myApp.controller("myController1", function($scope) {
		$scope.snippet = "# test";
	});

	myApp.controller("myController2", ['$scope', function($scope) {
		$scope.snippet = "## test";
	}]);

	myApp.controller('myController3', ['$scope', '$sce', function($scope, $sce) {
		$scope.snippet = '### test';
		$scope.deliberatelyTrustDangerousSnippet = function() {
			return $sce.trustAsHtml($scope.snippet);
		};
	}]);