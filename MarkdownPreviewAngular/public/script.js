var myApp = angular.module('myModule', ['ngSanitize', 'markdown']);

	myApp.controller("myController0", function($scope) {
		$scope.snippet = "test";
	})
	.filter('markdown', function() {
	
		return function(text) {

			if (typeof text == "undefined") {
				return "";
			}
			return markdown.toHTML(String(text));
			// return text.toUpperCase();
		}
	
	});

	myApp.controller("myController1", ['$scope', function($scope) {
		$scope.snippet = "# test";
	}])
	.filter('markdown', function() {
	
		return function(text) {

			if (typeof text == "undefined") {
				return "";
			}
			return markdown.toHTML(String(text));
			// return text.toUpperCase();
		}
	
	});

	myApp.controller('myController2', ['$scope', '$sce', function($scope, $sce) {
		$scope.snippet =
			'## test';
		$scope.deliberatelyTrustDangerousSnippet = function() {
			return $sce.trustAsHtml($scope.snippet);
		};
	}]);

	myApp.controller('myController3', function($scope) {
		$scope.snippet = '### test';
	});