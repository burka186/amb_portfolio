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

	.when('/go-fang-yourself', {
		templateUrl: 'pages/go-fang-yourself.html',
		controller: 'postController'
	})

	.when('/deja-vu', {
		templateUrl: 'pages/deja-vu.html',
		controller: 'postController'
	})

	.when('/janet-krupin', {
		templateUrl: 'pages/janet-krupin.html',
		controller: 'postController'
	})

	.when('/surface-102', {
		templateUrl: 'pages/surface-102.html',
		controller: 'postController'
	})

	.when('/surface-93', {
		templateUrl: 'pages/surface-93.html',
		controller: 'postController'
	})

	.when('/surface-92', {
		templateUrl: 'pages/surface-92.html',
		controller: 'postController'
	})

	.when('/surface-91', {
		templateUrl: 'pages/surface-91.html',
		controller: 'postController'
	})

	.when('/surface-90', {
		templateUrl: 'pages/surface-90.html',
		controller: 'postController'
	})
});

myApp.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
})

myApp.controller('workController', ['$scope', function($scope){

	$scope.selectedWork = [
	{ "id": "0",
	  "icon": "./img/trigger/trigger_icon.png",
	  "name": "TRIGGER",
	  "category": ["make", "all"],
	  "link": "#/trigger?scrollTo=view-container"},
	{ "id": "1",
	  "icon": "./img/mutually/mutually_icon.png",
	  "name": "MUTUALLY",
	  "category": ["make", "all"],
	  "link": "#/mutually-app?scrollTo=view-container"},
	{ "id": "2",
	  "icon": "./img/self-portrait/sp_icon.jpg",
	  "name": "SELF PORTRAIT",
	  "category": ["experiment", "all"],
	  "link": "#/self-portrait?scrollTo=view-container"},
	{ "id": "3",
	  "icon": "./img/catharsis/catharsis_icon.png",
	  "name": "CATHARSIS",
	  "category": ["make", "all"],
	  "link": "#/catharsis?scrollTo=view-container"},
	{ "id": "4",
	  "icon": "./img/shadowbox/shadowbox_icon.png",
	  "name": "DECONSTRUCTED MIDCENTURY PASTORAL",
	  "category": ["experiment", "all"],
	  "link": "#/shadowbox?scrollTo=view-container"},
	{ "id": "5",
	  "icon": "./img/isfs/isfs_icon.png",
	  "name": "INSTRUCTION SET FOR STRANGERS",
	  "category": ["make", "all"],
	  "link": "#/isfs?scrollTo=view-container"},
	{ "id": "6",
	  "icon": "./img/go-fang-yourself/gofangyourself_icon.png",
	  "name": "GO FANG YOURSELF",
	  "category": ["experiment", "all"],
	  "link": "#/go-fang-yourself?scrollTo=view-container"},
	{ "id": "7",
	  "icon": "./img/deja-vu/dejavu_icon.png",
	  "name": "DEJA VU",
	  "category": ["experiment", "all"],
	  "link": "#/deja-vu?scrollTo=view-container"},
	{ "id": "8",
	  "icon": "./img/janet-krupin/jkru_icon.png",
	  "name": "JANET KRUPIN",
	  "category": ["make", "all"],
	  "link": "#/janet-krupin?scrollTo=view-container"},
	{ "id": "9",
	  "icon": "./img/surface/102_icon.png",
	  "name": "SURFACE MAGAZINE ISSUE 102",
	  "category": ["write", "all"],
	  "link": "#/surface-102?scrollTo=view-container"},
	{ "id": "10",
	  "icon": "./img/surface/93_icon.png",
	  "name": "SURFACE MAGAZINE ISSUE 93",
	  "category": ["write", "all"],
	  "link": "#/surface-93?scrollTo=view-container"},
	{ "id": "11",
	  "icon": "./img/surface/92_icon.png",
	  "name": "SURFACE MAGAZINE ISSUE 92",
	  "category": ["write", "all"],
	  "link": "#/surface-92?scrollTo=view-container"},
	{ "id": "12",
	  "icon": "./img/surface/91_icon.png",
	  "name": "SURFACE MAGAZINE ISSUE 91",
	  "category": ["write", "all"],
	  "link": "#/surface-91?scrollTo=view-container"},
	{ "id": "13",
	  "icon": "./img/surface/90_icon.png",
	  "name": "SURFACE MAGAZINE ISSUE 90",
	  "category": ["write", "all"],
	  "link": "#/surface-90?scrollTo=view-container"},
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



