// DECLARACION DE APP Y DEPENDENCIAS
// ******************************
var app = angular.module('vtools', []);

app.controller("MainController", function($scope) {
    
	$scope.listUser = {"murillo":"ALPHA","demarco":"ALPHA","garofalo":"ALPHA","calleja":"ALPHA","garcia":"BETA","perez":"BETA","mediavilla":"BETA","ortiz":"BETA","rodriguez":"DELTA","mediavilla2":"DELTA","montilla":"DELTA","mayoral":"DELTA","martin2":"GAMMA","iñigo":"GAMMA","muñoz":"GAMMA","sola":"GAMMA","madridano":"SIGMA","iñigo2":"SIGMA","martin":"SIGMA"};
	$scope.surname;
	$scope.showFrat = false;
	$scope.frat = "";

	/**
    * 
    */
    $scope.getFrat = function () {
    	$scope.showFrat = true;
        $scope.frat = $scope.listUser[$scope.surname];
        console.log($scope.frat);
    };


    /**
    * 
    */
    $scope.init = function () {
        console.log('init');
    };

    $scope.init();

});