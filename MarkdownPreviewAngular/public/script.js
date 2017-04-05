
// var myApp = angular.module('myModule', ['ngSanitize']);

// 	myApp.controller("myController", function($scope) {
// 		$scope.message = "test";
// 	})
// 	.filter('markdown', function() {
	
// 		return function(text) {

// 			if (typeof text == "undefined") {
// 				return "";
// 			}
// 			// return markdown.toHTML(String(text));
// 			return text.toUpperCase();
// 		}
	
// });


var myApp = angular.module('markdown', ['ngSanitize', 'markdown']);

	myApp.controller("myController1", ['$scope', function($scope) {
		$scope.snippet = "#test";
	}])
	.filter('markdown', function() {
	
		return function(text) {

			if (typeof text == "undefined") {
				return "";
			}
			// return markdown.toHTML(String(text));
			return text.toUpperCase();
		}
	
	});

	myApp.controller('myController2', ['$scope', '$sce', function($scope, $sce) {
		$scope.snippet =
			'<p style="color:blue">an html\n' +
			'<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
			'snippet</p>';
		$scope.deliberatelyTrustDangerousSnippet = function() {
			return $sce.trustAsHtml($scope.snippet);
		};
	}]);

	myApp.controller('myController3', function($scope) {
		$scope.snippet = '# Heading 1\n- [Link](http://example.com)\n- [Custom Link 1](herp://is.this.working?)\n- [Custom Link 2](derp://is.this.working?)';
	});

// angular.module('myModule', ['ngSanitize'])
// 	.controller('myController', ['$scope', '$sce', function($scope, $sce) {
// 		$scope.snippet =
// 			'<p style="color:blue">an html\n' +
// 			'<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
// 			'snippet</p>';
// 		$scope.deliberatelyTrustDangerousSnippet = function() {
// 			return $sce.trustAsHtml($scope.snippet);
// 		};
// 	}]);


