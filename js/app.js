// DECLARACION DE APP Y DEPENDENCIAS
// ******************************
var app = angular.module('vtools', ['ngAnimate']);

app.controller("MainController", function($scope) {
    

	$scope.listUser = 
        {
            "madridano":"1",
            "murillo":"1",
            "garofalo":"1",
            "demarco":"1",
            "bergon":"1",
            "garcia":"2",
            "mediavilla":"2",
            "lucas":"2",
            "fernandez":"2",
            "iñigo":"2",
            "montilla" : "3",
            "muñoz":"3",
            "padilla":"3",
            "parra":"3",
            "garcia":"3",
            "perez":"4",
            "mayoral":"4",
            "carballo":"4",
            "gutierrez":"4",
            "sola":"4",
            "martinez":"4"
        };

    $scope.listCaptain = 
        {
            "garcia":"1",
            "demarco":"1",
            "perez":"1",
            "montilla":"1"
        };

	$scope.surname;
	$scope.showFrat = false;
	$scope.frat = "";
    $scope.textCaptain = "Eres el lider";

    // 1 (5)
    //madridano (Eva)
    //murillo (Felipe)    
    //garofalo (Mau)
    //demarco (Monica)
    //Bergon (Rodri)


    // 2 (5)
    //garcia (David)
    //mediavilla (Javi)
    //lucas (Vir)
    //fernandez (AJ)
    //iñigo (Sergio)

    // 3 (5)
    //montilla (Beatriz)
    //muñoz (Eduardo)
    //padilla (Belen)
    //parra (Ulises)
    //garcia (Pili)

    // 4 (6)
    //perez (David)
    //mayoral (Monica)
    //carballo (David)
    //gutierrez (Daniel)    
    //sola (Fakundo)
    //martinez (Beatriz)
    

    
    //---------------------
    //rodriguez (Sandra)
    //ortiz (Lorena)
    //cano (David)--
    //martin (Jony)--
    //arenillas (Rocio)--
    //hervas (MªAngeles)--
    //gonzalez (Joni)
    //rodriguez (Noa)
    //ocaña (pilar)
    //calleja (Irene)
    //martin2

    $scope.totalKappa = 0;
    $scope.totalDelta = 0;
    $scope.totaOmega = 0;
    $scope.totalPhi = 0;

	$scope.getFratKeyPress = function(keyEvent) {
		if (keyEvent.which === 13){
			$scope.getFrat();	  	
		}


        if(keyEvent.which === 49){
            if(keyEvent.altKey){
                if($scope.totalKappa<100){
                    $scope.totalKappa++;    
                }
            }else{
                if($scope.totalKappa>0){
                    $scope.totalKappa--;    
                }
            }
        }

        if(keyEvent.which === 50){
            if(keyEvent.altKey){
                if($scope.totalDelta<100){
                    $scope.totalDelta++;    
                }
            }else{
                if($scope.totaOmega>0){
                    $scope.totaOmega--;    
                }
                $scope.totalDelta--;    
            }
        }

        if(keyEvent.which === 51){
            if(keyEvent.altKey){
                if($scope.totaOmega<100){
                    $scope.totaOmega++;    
                }
                
            }else{
                if($scope.totaOmega>0){
                    $scope.totaOmega--;    
                }
            }
        }

        if(keyEvent.which === 52){
            if(keyEvent.altKey){
                if($scope.totalPhi<100){
                    $scope.totalPhi++;    
                }
            }else{
                if($scope.totalPhi>0){
                    $scope.totalPhi--;    
                }
            }
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