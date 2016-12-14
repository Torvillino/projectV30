// DECLARACION DE APP Y DEPENDENCIAS
// ******************************
var app = angular.module('vtools', ['ngAnimate']);

app.controller("MainController", function($scope) {
    
	$scope.listUser = {"murillo":"1","demarco":"1","garofalo":"1","calleja":"1","garcia":"2","perez":"2","mediavilla":"2","ortiz":"2","rodriguez":"3","mediavilla2":"3","montilla":"3","mayoral":"3","martin2":"4","iñigo":"4","muñoz":"4","sola":"4","madridano":"5","iñigo2":"5","martin":"5"};
	$scope.surname;
	$scope.showFrat = false;
	$scope.frat = "";


	$scope.getFratKeyPress = function(keyEvent) {
		if (keyEvent.which === 13){
			$scope.getFrat();	  	
		}
	}

	/**
    * Metodo que obtiene la fraterninadad y lo almacena en un variable del
    * scope
    */
    $scope.getFrat = function () {
    	
    	// Realizamos el reload
    	//$scope.reload();

    	// Recuperamos el apellido y realizamos un trim y un lowercase
    	// Para trabajar mas seguro
    	var surnameKey = $scope.surname.toLowerCase().trim().replace(" ", "");

		// Si la clave no es todosito accedemos al map
    	if(surnameKey != "todosito"){
    		// Comprobamos que existe el nombre
    		if($scope.listUser[surnameKey] != undefined){
    			$scope.frat = $scope.listUser[surnameKey];
    			$scope.showFrat = true;
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
    $scope.getListByFrat = function (idFrat) {

        // Listado a devolver
        var list = new Array();

        // Recorremos el listado de usuarios y nos quedamos con los usuarios
        $.each($scope.listUser, function(key, value){
            if(value == idFrat){
                list.push(key);
            }
        });

    	return list;
    };


    /**
    * 
    */
    $scope.init = function () {
        console.log('init');
    };

    $scope.init();

});