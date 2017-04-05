
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


angular.module('myModule', ['ngSanitize'])
	.controller('myController', ['$scope', '$sce', function($scope, $sce) {
		$scope.snippet =
			'<p style="color:blue">an html\n' +
			'<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
			'snippet</p>';
		$scope.deliberatelyTrustDangerousSnippet = function() {
			return $sce.trustAsHtml($scope.snippet);
		};
	}]);


// var myApp = angular.module('myModule', ['ngSanitize']);

// 	myApp.controller("myController", ['$scope', '$sce', function($scope, $sce) {
// 		$scope.snippet = "test";
// 	}])
// 	.filter('markdown', function() {
	
// 		return function(text) {

// 			if (typeof text == "undefined") {
// 				return "";
// 			}
// 			// return markdown.toHTML(String(text));
// 			return text.toUpperCase();
// 		}
	
// });
