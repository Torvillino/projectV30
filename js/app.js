// DECLARACION DE APP Y DEPENDENCIAS
// ******************************
var app = angular.module('vtools', ['ngAnimate']);

app.controller("MainController", function($scope) {
    

    $scope.listUser = {"madridano":"1","murillo":"1","iñigo2":"1","garofalo":"1","demarco":"1","garcia":"2","calleja":"2","mediavilla":"2","rodriguez":"2""montilla":"3","muñoz":"3","iñigo":"3","muñoz":"3","ortiz":"3","sola":"4","mayoral":"4","martinez":"4","perez":"4","carballo":"4"};

    $scope.listCaptain = {"garcia":"1","madridano":"1","sola":"1","montilla":"1"};

	/*$scope.listUser = 
        {
            "madridano":"1",
            "murillo":"1",
            "iñigo2":"1",
            "garofalo":"1",
            "demarco":"1",
            "garcia":"2",
            "calleja":"2",
            "mediavilla":"2",
            "rodriguez":"2"
            "montilla":"3",
            "muñoz":"3",
            "iñigo":"3",
            "muñoz":"3",
            "ortiz":"3",
            "sola":"4",
            "mayoral":"4",
            "martinez":"4",
            "perez":"4",
            "carballo":"4"
        };

    $scope.listCaptain = 
        {
            "garcia":"1",
            "madridano":"1",
            "sola":"1",
            "montilla":"1"
        };*/
	$scope.surname;
	$scope.showFrat = false;
	$scope.frat = "";
    $scope.textCaptain = "Eres el lider";

    // 1
    //madridano (Eva)
    //murillo (Felipe)
    //iñigo2 (Pili)
    //garofalo (Mau)
    //demarco (Monica)

    // 2
    //garcia (David)
    //calleja (Irene)
    //mediavilla (Javi)
    //rodriguez (Noa)
    //rodriguez (Sandra)
        
    // 3
    //montilla (Beatriz)
    //muñoz (Eduardo)
    //iñigo (Sergio)
    //ortiz (Lorena)
    //fernandez (aj)    

    // 4
    //sola (Fakundo)
    //mayoral (Monica)
    //martinez (Beatriz)
    //perez (David)
    //carballo (David)

    //
    //martin
    //martin2

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
    	var surnameKey = $scope.getCleanedString($scope.surname);
        $scope.showFrat = true;
		// Si la clave no es todosito accedemos al map
    	if(surnameKey != "todosito"){
    		// Comprobamos que existe el nombre
    		if($scope.listUser[surnameKey] != undefined){
    			$scope.frat = $scope.listUser[surnameKey];
    		}else{

    			$scope.frat = '7';	
    		}
    	}else{
    		$scope.frat = '6';
    	}
    };

    /**
    * Metodo para saber si el usuario es capitan
    */
    $scope.isCaptain = function () {

        var isCaptain = false;
        var idUser = $scope.getCleanedString($scope.surname);

        // Recorremos el map de capitanes
        $.each($scope.listCaptain, function(key, value){
            if(key == idUser){
                isCaptain = true;
            }
        });

        // Devolvemos si el usuario introducido es capitan
        return isCaptain;

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
    * Funciona para limpiar el strin de acentos caracteres raros
    */
    $scope.getCleanedString = function(cadena){
       // Definimos los caracteres que queremos eliminar
       var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

       // Los eliminamos todos
       for (var i = 0; i < specialChars.length; i++) {
           cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
       }   

       // Lo queremos devolver limpio en minusculas
       cadena = cadena.toLowerCase();

       // Quitamos espacios
       cadena = cadena.replace(/ /g,"");

       // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
       cadena = cadena.replace(/á/gi,"a");
       cadena = cadena.replace(/é/gi,"e");
       cadena = cadena.replace(/í/gi,"i");
       cadena = cadena.replace(/ó/gi,"o");
       cadena = cadena.replace(/ú/gi,"u");
       cadena = cadena.replace(/ñ/gi,"n");

       return cadena;
    }
    /**
    * 
    */
    $scope.init = function () {
        console.log('init');
    };

    $scope.init();

});