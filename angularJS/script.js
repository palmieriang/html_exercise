/// <reference path="angular.min.js"/>

//1st way

// var myApp = angular.module("myModule", []);

// var myController1 = function($scope) {
// 	$scope.message = "AngularJS Tutorial";
// };

// myApp.controller("myController", myController); 

//2nd way

var myApp = angular.module("myModule", ['ngAnimate']);

myApp.controller("myController1", function($scope) {
	$scope.message = "AngularJS Tutorial";
}); 


myApp.controller("myController2", function($scope) {
	var employee = {
		firstName : "David",
		lastName : "Hastings",
		gender : "Male"
	};

	$scope.employee = employee;
}); 

//3rd way

// var myApp = angular
// 				.module("myModule", [])
// 				.controller("myController2", function($scope) {
// 	var employee = {
// 		firstName : "David",
// 		lastName : "Hastings",
// 		gender : "Male"
// 	};

// 	$scope.employee = employee;

// });

myApp.controller("myController3", function($scope) {
	var country = {
		name : "USA",
		capital : "Washington",
		flag : "usa-flag.svg"
	};

	$scope.country = country;
});

myApp.controller("myController4", function($scope) {
	$scope.message = "Hello Angular";
});

myApp.controller("myController5", function($scope) {
	var employee = {
		firstName : "David",
		lastName : "Hastings",
		gender : "Male"
	};

	$scope.employee = employee;

});

myApp.controller("myController6", function($scope) {
	var employees = [
		{firstName:"Ben", lastName:"Hastings", gender:"Male", salary:"55000"},
		{firstName:"Sara", lastName:"Paul", gender:"Female", salary:"68000"},
		{firstName:"Mark", lastName:"Holland", gender:"Male", salary:"57000"},
		{firstName:"Pam", lastName:"Macintosh", gender:"Female", salary:"53000"},
		{firstName:"Todd", lastName:"Barber", gender:"Male", salary:"60000"}
	];

	$scope.employees = employees;
});

myApp.controller("myController7", function($scope) {
	var countries = [
		{
			name: "Uk",
			cities: [
				{name: "London"},
				{name: "Manchester"},
				{name: "Birmingham"},
			]
		},
		{
			name: "USA",
			cities: [
				{name: "Los Angeles"},
				{name: "Chicago"},
				{name: "Huston"},
			]
		},
		{
			name: "India",
			cities: [
				{name: "Hyberabad"},
				{name: "Chennai"},
				{name: "Mumbai"},
			]
		}
	];

	$scope.countries = countries;
});

myApp.controller("myController8", function($scope) {
	var technologies = [
		{name: "C#", likes: 0, dislikes: 0},
		{name: "ASP.NET", likes: 0, dislikes: 0},
		{name: "SQL", likes: 0, dislikes: 0},
		{name: "AngularJS", likes: 0, dislikes: 0},		
	]; 

	$scope.technologies = technologies;

	$scope.incrementLikes = function(technology) {
		technology.likes++;
	}

	$scope.incrementDislikes = function(technology) {
		technology.dislikes++;
	}
})

myApp.controller("myController9", function($scope) {
	var employees = [
		{ name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: "55000.788"},
		{ name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: "68000"},
		{ name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: "57000"},
		{ name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: "53000"},
		{ name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: "60000"},
	];

	$scope.employees = employees;

	$scope.rowLimit = 3;
});

myApp.controller("myController10", function($scope) {
	var employees = [
		{ name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: "55000"},
		{ name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: "68000"},
		{ name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: "57000"},
		{ name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: "53000"},
		{ name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: "60000"},
	];

	$scope.employees = employees;

	$scope.sortColumn = "name";

});

myApp.controller("myController11", function($scope) {
	var employees = [
		{ name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: "55000"},
		{ name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: "68000"},
		{ name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: "57000"},
		{ name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: "53000"},
		{ name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: "60000"},
	];

	$scope.employees = employees;

	$scope.sortColumn = "name";

	$scope.reverseSort = false;

	$scope.sortData = function (column) {
		$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
		$scope.sortColumn = column;
	}

	$scope.getSortClass = function(column) {
		if($scope.sortColumn == column) {
			return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
		}
		return '';
	}

});

myApp.controller("myController12", function($scope) {
	var employees = [
		{ name: "Ben", gender: "Male", salary: "55000", city: "London"},
		{ name: "Sara", gender: "Female", salary: "68000", city: "Chennai"},
		{ name: "Mark", gender: "Male", salary: "57000", city: "London"},
		{ name: "Pam", gender: "Female", salary: "53000", city: "Chennai"},
		{ name: "Todd", gender: "Male", salary: "60000", city: "London"},
	];

	$scope.employees = employees;

});

myApp.controller("myController13", function($scope) {
	var employees = [
		{ name: "Ben", gender: "Male", salary: "55000", city: "London"},
		{ name: "Sara", gender: "Female", salary: "68000", city: "Chennai"},
		{ name: "Mark", gender: "Male", salary: "57000", city: "London"},
		{ name: "Pam", gender: "Female", salary: "53000", city: "Chennai"},
		{ name: "Todd", gender: "Male", salary: "60000", city: "London"},
	];

	$scope.employees = employees;

	$scope.search = function(item) {
		if($scope.searchText == undefined) {
			return true;
		} else {
			if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
				//if is not = -1 we have a match found
				return true;
			}
		}
		return false;
		// we don't want that item to be displayed in the search result
	}
	
});

myApp.controller("myController14", function($scope) {
	var employees = [
		{ name: "Ben", gender: 1, salary: "55000"},
		{ name: "Sara", gender: 2, salary: "68000"},
		{ name: "Mark", gender: 1, salary: "57000"},
		{ name: "Pam", gender: 2, salary: "53000"},
		{ name: "Todd", gender: 3, salary: "60000"},
	];

	$scope.employees = employees;

});

myApp.filter('gender', function(){
	return function(gender) {
		switch (gender) {
			case 1: 
				return "Male";
			case 2:
				return "Female";
			case 3:
				return "Not disclosed";
		}		
	}
});

// This way, insted of applying "myModule" to everything (in html tag), I need yo apply myModule2 to this container
// var app = angular 
// 	.module("myModule2", [])
// 	.filter("gender", function() {
// 		return function(gender) {
// 			switch (gender) {
// 				case 1: 
// 					return "Male";
// 				case 2:
// 					return "Female";
// 				case 3:
// 					return "Not disclosed";
// 			}
// 		}
// 	})
// 	.controller("myController14", function($scope) {
// 		var employees = [
// 			{ name: "Ben", gender: 1, salary: "55000"},
// 			{ name: "Sara", gender: 2, salary: "68000"},
// 			{ name: "Mark", gender: 1, salary: "57000"},
// 			{ name: "Pam", gender: 2, salary: "53000"},
// 			{ name: "Todd", gender: 3, salary: "60000"},
// 		];

// 		$scope.employees = employees;
// 	});

myApp.controller("myController15", function($scope) {
	var employees = [
		{ name: "Ben", gender: "Male", salary: "55000", city: "London"},
		{ name: "Sara", gender: "Female", salary: "68000", city: "Chennai"},
		{ name: "Mark", gender: "Male", salary: "57000", city: "London"},
		{ name: "Pam", gender: "Female", salary: "53000", city: "Chennai"},
		{ name: "Todd", gender: "Male", salary: "60000", city: "London"},
	];

	$scope.employees = employees;

});

myApp.controller("myController16", function($scope) {
	var employees = [
		{ name: "Ben", gender: "Male", salary: "55000"},
		{ name: "Sara", gender: "Female", salary: "68000"},
		{ name: "Mark", gender: "Male", salary: "57000"},
		{ name: "Pam", gender: "Female", salary: "53000"},
		{ name: "Todd", gender: "Male", salary: "60000"},
	];

	$scope.employees = employees;
	
	$scope.employeeView = "employeeTable.html";
	// se aggiungo questo, nella pagina html, dove richiamo 
	// la tabella devo rimuovere le virgolette singole: ng-include="'employeeTable.html'" diventa 
	// ng-include="employeeView" e funziona ugualmente.
	// quindi se uso una proprietà in $scope uso solo " ", se voglio usare un nome del file uso "' '"
});

myApp.controller("myController17", function($scope, $http) {
	$http.get('http://localhost/exercises/3connectAngularJS/test.php')
		// To use get instead of post we have to add one configuration section within our web.configuration file 
		.then(function(response) {
			// console.log(response.data);
			$scope.employees = response.data;
		});
});

myApp.controller("myController18", function($scope, $http, $log) {

	var successCallBack = function(response) {
		$scope.employees = response.data;
	};

	var errorCallBack = function() {
		$scope.error = response.data;
	}

	$http({
		method: 'GET',
		url: 'http://localhost/exercises/3connectAngularJS/test.php'
	}).then(successCallBack, errorCallBack);
});

	// http service returns a promise object
	// $scope.employees = $http.get('nameService.asmx/nameFunction');
	// better method:
	// $scope.employees = $http.get('nameService.asmx/nameFunction')
	// 						.then(function(response) {
	// 							$scope.employees = response.data;
	// 							$log.info(response);
	// 						});
	// to use $log it has to be injected in the function($scope, $http, $log)

myApp.controller("myController20", function($scope) {
	$scope.transformString = function(input) {
		
		if (!input) {
			return input;
		}

		var output = "";

		for(var i=0; i<input.length; i++) {
			if(i > 0 && input[i] == input[i].toUpperCase()) {
				output = output + " ";
			}
			output = output + input[i];
		}

		$scope.output = output;
	}
});

myApp.controller("myController20B", function($scope, stringService) {
	$scope.transformString = function(input) {

		$scope.output = stringService.processString(input);
	}
});

myApp.controller("myController21", function($scope, $location, $anchorScroll) {
	$scope.scrollTo = function(scrollLocation) {
		$location.hash(scrollLocation);
		$anchorScroll.yOffset = 40;
		$anchorScroll();
	}
});

myApp.controller("myController22", function($scope, $http, $location, $anchorScroll) {
	$http.get('http://localhost/exercises/lesson22.php')
		.then(function (response) {
			$scope.list = response.data;
			console.log($scope.list.country);
		});
	$scope.scrollTo = function(countryName) {
		$location.hash(countryName);
		$anchorScroll();
	}
});

myApp.controller("myController23", function($scope) {
	$scope.name = "Controller numero 23";
}); 

myApp.controller("myController24", function($scope) {
	$scope.name = "Controller numero 24";
}); 

myApp.controller("myController25", function($scope) {
	$scope.name = "Controller numero 25";
}); 

myApp.controller("myController26", function() {
	this.name = "Controller numero 26";
}); 

myApp.controller("myController27", function() {
	// we don't need scope anymore, but we can leave it for other purpose
	this.name = "Controller numero 27";
}); 

myApp.controller("myController28", function() {
	this.name = "Controller numero 28";
}); 

myApp.controller("myController29", function($scope, $rootScope) {
	$scope.redColour = "I am red color";
	$rootScope.rootScopeColour = "I am a rootScope colour";
}); 

myApp.controller("myController30", function($scope) {
	$scope.greenColour = "I am green color";
}); 

myApp.controller("myController31", function($scope) {

}); 

myApp.filter('base', function() {
	var something = function(input, base) {
		var parsed = parseInt(input, 10);
		var based = parseInt(base, 10);

		if(isNaN(parsed) || isNaN(based) || based <= 1 || based >= 37) return "Error! Invalid base.";

		return parsed.toString(based);
	}
	return something;
});

myApp.controller('myController32', function($scope) {
	$scope.controllerProperty = "New text";
});

myApp.directive('myDirective1', function() {
	return {
		template: 'Hello World!'
	};
});

myApp.directive('myDirective2', function() {
	function linkFunction(scope, elem, attrs) {
		elem.bind('click', function() {
			console.log(elem[0].innerHTML);
		})
	}
	return {
		template: 'Hello World!',
		restrict: 'EA',
		link: linkFunction
	};
});

myApp.directive('myDirective3', function() {
	function linkFunction($scope, elem, attrs) {
		$scope.name = "Hello World!";
		$scope.changeName = function(newName) {
			$scope.name = $scope.controllerProperty;
		}
	}
	return {
		restrict: 'EA',
		scope: true,
		link: linkFunction,
		template: '<span ng-click="changeName()">Current text: {{name}}</span>'
	}
});

myApp.controller('myController33', function($scope) {
	$scope.name = "Test";
	$scope.age = 100;
	$scope.alertTheName = function() {
		alert($scope.name);
	}
});

myApp.directive('myDirective4', function() {
	return {
		restrict: 'EA',
		scope: {
			name:'@',
			age: '=',
			func: '&'
		},
		template: [
			'<span>Value of name in directive: {{name}} </span><br />',
			'<span>Enter new "name": <input type="text" ng-model="name"></span><br />',
			'<span>Value of age in directive: {{age}}</span><br />',
			'<span>Enter new "age": <input type="text" ng-model="age"></span><br />',
			'<span><input type="button" value="Alert from Directive" ng-click="func()"></span><br />'
		].join('')
	}
});

myApp.controller('myController34', function($scope) {
	$scope.foods = ['Pizza', 'Burger', 'Pasta', 'Potaoe'];
});

/*// Inject 'ngCookies' in the module
myApp.controller('myController35', ['$scope', '$cookies', function($scope, $cookies) {
	$scope.myCookieVal = $cookies.get('cookie');
	$scope.setCookie = function(val) {
		$cookies.put('cookie', val);
	}
}]);*/






