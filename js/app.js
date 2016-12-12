// DECLARACION DE APP Y DEPENDENCIAS
// ******************************
var app = angular.module('vtools', []);

app.controller("MainController", function($scope) {
    
	$scope.listUser = {"murillo":"1","demarco":"1","garofalo":"1","calleja":"1","garcia":"2","perez":"2","mediavilla":"2","ortiz":"2","rodriguez":"3","mediavilla2":"3","montilla":"3","mayoral":"3","martin2":"4","iñigo":"4","muñoz":"4","sola":"4","madridano":"5","iñigo2":"5","martin":"5"};
	$scope.surname;
	$scope.showFrat = false;
	$scope.frat = "";

	/**
    * 
    */
    $scope.getFrat = function () {
    	$scope.showFrat = true;

    	if($scope.surname != "todosito"){
    		// Comprobamos que existe el nombre
    		if($scope.listUser[$scope.surname] != undefined){
    			$scope.frat = $scope.listUser[$scope.surname];
    		}else{
    			$scope.frat = '7';	
    		}
    	}else{
    		$scope.frat = '6';
    	}
    };

    /**
    * 
    */
    $scope.reload = function () {
    	$scope.showFrat = false;
    	$scope.surname = "";
    	$scope.frat = "";
    };


    /**
    * 
    */
    $scope.init = function () {
        console.log('init');
    };

    $scope.init();

});