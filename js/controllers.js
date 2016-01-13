//initialize the app. it's specifying what to look for in the HTML 
//and any dependencies (right now we don't have any so it's empty brackets)
var myApp = angular.module('myApp', []);

//$scope is the local object. every variable we're going to use inside the MyController function
//will have to be wrapped in this variable so it can be loaded in the HTML. it's kind of like making 
//everything within a public variable
//think of it like: we're not putting in $scope as a parameter, we're getting it out
//$scope is local to the controller MyController
myApp.controller('MyController', function MyController($scope, $http){

	//loads the data.json file
	// $http.get('js/data.json')
	// 	//success callback function when the file is successfully loaded
	// 	.success(function(data){
	// 		$scope.selectedWork = data;
	// });

	//putting data in  here bc can't figure out how to load it from external JSOn and get categories to work
	$scope.selectedWork = [
	{ "id": "1",
	  "icon": "./img/ava_logo.png",
	  "name": "TRIGGER",
	  "medium": "openFrameworks, Arduino",
	  "description": "TRIGGER is an exploration, confrontation, and expression of female anger in response to a culture of unrelenting and often violent misogyny. In its current state, the project is a proof of concept for a planned interactive gallery installation that is seeking a space in 2016.",
	  "category": "make"},
	{ "id": "2",
	  "icon": "./img/ava_logo.png",
	  "name": "MUTUALLY",
	  "medium": "openFrameworks",
	  "category": "make"},
	{ "id": "3",
	  "icon": "./img/ava_logo.png",
	  "name": "SPACE DOG",
	  "medium": "openFrameworks",
	  "category": "write"},
	{ "id": "4",
	  "icon": "./img/ava_logo.png",
	  "name": "TABLE DESIGN",
	  "medium": "openFrameworks",
	  "category": "experiment"},
	  { "id": "5",
	  "icon": "./img/ava_logo.png",
	  "name": "THESIS",
	  "medium": "openFrameworks",
	  "category": "experiment"},
	  { "id": "6",
	  "icon": "./img/ava_logo.png",
	  "name": "DATA DOG",
	  "medium": "openFrameworks",
	  "category": "write"},
	  { "id": "7",
	  "icon": "./img/ava_logo.png",
	  "name": "EXTRAPOLATION FACTORY",
	  "medium": "openFrameworks",
	  "category": "make"},
	  { "id": "8",
	  "icon": "./img/ava_logo.png",
	  "name": "PEACH",
	  "medium": "openFrameworks",
	  "category": "experiment"},
	  { "id": "9",
	  "icon": "./img/ava_logo.png",
	  "name": "SMALL PUPPER",
	  "medium": "openFrameworks",
	  "category": "make"},
	  { "id": "10",
	  "icon": "./img/ava_logo.png",
	  "name": "SHIBA",
	  "medium": "openFrameworks",
	  "category": "make"}
	]

	//defining the different categories
	$scope.categories = [
		{ "catName": "MAKE" },
		{ "catName": "WRITE" },
		{ "catName": "EXPERIMENT" }
	];

	//initiate current category as make
	$scope.currentCategory = "make";

	//function to set the current category
	function setCurrentCategory(category){
		$scope.currentCategory = category;
		console.log("current category is " + $scope.currentCategory);

	};

	//make the current category available to the view by attaching it to the scope
	$scope.setCurrentCategory = setCurrentCategory;

	//CREATING AND TOGGLING BETWEEN STATES
	$scope.postIsShown = false;
	$scope.menuIsShown = true;

	function setPostId(id){
		$scope.currentId = id;
		console.log("current post ID is" + $scope.currentId);
	}

	function showPost(id) {
		$scope.postIsShown = true;
		$scope.menuIsShown = false;
		setPostId(id);
	};

	function hidePost() {
		$scope.postIsShown = false;
		$scope.menuIsShown = true;
	};

	function shouldShowPost() {
		return $scope.postIsShown == true && $scope.currentId;
	}

	function shouldHidePost() {
		return $scope.postIsShown = false;
	}

	$scope.setPostId = setPostId;
	$scope.showPost = showPost;
	$scope.hidePost = hidePost;
	$scope.shouldShowPost = shouldShowPost;
	$scope.shouldHidePost = shouldHidePost;
});