//initialize the app. it's specifying what to look for in the HTML 
//and any dependencies (ngRoute is a dependency)
var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngTouch']);

//configure application to use routeProvider
//config is a method that takes a function. we are injecting routeProvider into the app here
myApp.config(function($routeProvider){

	$routeProvider
	//when i see this in the hash...use this template and this controller
	.when('/', {
		//physical location of particular template
		templateUrl: 'pages/work.html',
		//which controller that template should be connected to
		controller: 'workController'
	})

	.when('/work', {
		//physical location of particular template
		templateUrl: 'pages/work.html',
		//which controller that template should be connected to
		controller: 'workController'
	})

	.when('/trigger', {
		templateUrl: 'pages/trigger.html',
		controller: 'postController'
	})

	.when('/mutually-app', {
		templateUrl: 'pages/mutually-app.html',
		controller: 'postController'
	})

	.when('/self-portrait', {
		templateUrl: 'pages/self-portrait.html',
		controller: 'postController'
	})

	.when('/catharsis', {
		templateUrl: 'pages/catharsis.html',
		controller: 'postController'
	})

	.when('/shadowbox', {
		templateUrl: 'pages/shadowbox.html',
		controller: 'postController'
	})

	.when('/isfs', {
		templateUrl: 'pages/isfs.html',
		controller: 'postController'
	})
});

myApp.controller('workController', ['$scope', function($scope){

	$scope.selectedWork = [
	{ "id": "0",
	  "icon": "./img/trigger/trigger_icon.png",
	  "name": "TRIGGER",
	  "category": ["make", "all"],
	  "link": "#/trigger"},
	{ "id": "1",
	  "icon": "./img/mutually/mutually_icon.png",
	  "name": "MUTUALLY",
	  "category": ["make", "all"],
	  "link": "#/mutually-app"},
	{ "id": "2",
	  "icon": "./img/self-portrait/sp_icon.jpg",
	  "name": "SELF PORTRAIT",
	  "category": ["experiment", "all"],
	  "link": "#/self-portrait"},
	{ "id": "3",
	  "icon": "./img/catharsis/catharsis_icon.png",
	  "name": "CATHARSIS",
	  "category": ["make", "all"],
	  "link": "#/catharsis"},
	{ "id": "4",
	  "icon": "./img/shadowbox/shadowbox_icon.png",
	  "name": "DECONSTRUCTED MIDCENTURY PASTORAL",
	  "category": ["experiment", "all"],
	  "link": "#/shadowbox"},
	{ "id": "5",
	  "icon": "./img/isfs/isfs_icon.png",
	  "name": "INSTRUCTION SET FOR STRANGERS",
	  "category": ["make", "all"],
	  "link": "#/isfs"},
	];
	//defining the different categories
	$scope.categories = [
		{ "catName": "MAKE" },
		{ "catName": "WRITE" },
		{ "catName": "EXPERIMENT" }
	];

	//initiate current category as null
	$scope.currentCategory = "all";

	//function to set the current category
	function setCurrentCategory(category){
		$scope.currentCategory = category;
		console.log("current category is " + $scope.currentCategory);

	};

	//make the current category available to the view by attaching it to the scope
	$scope.setCurrentCategory = setCurrentCategory;

}]);

myApp.controller('carouselController', ['$scope', function($scope){

	$scope.myInterval = 8000;
  	$scope.noWrapSlides = false;

}]);

myApp.controller('postController', ['$scope', function($scope){



}]);



