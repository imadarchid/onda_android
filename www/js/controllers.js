angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  
})

.controller('DeparturesCtrl', function($http, $scope){

  $scope.date = new Date();

  $http({
        method : "GET",
        url : "http://onda-imad.herokuapp.com/users"
    }).then(function Succes(response) {
        $scope.data = response.data;
        $scope.num = response.data.H;
        console.log('WA IT WORKS');
    }, function Error(response) {
        $scope.text = response.statusText;
        alert('meh');
    });

  
})

.controller('ArrivalCtrl', function($scope, $stateParams, $http, $ionicLoading){
  $ionicLoading.show()
  $scope.date = new Date();
         $scope.cityName = $stateParams.cityName;
         $scope.name = $stateParams.name;
         $scope.WN = $stateParams.WeatherName;

         $scope.isCity = function(x){
    return (x.ville_aeroport == $stateParams.WeatherName);
};



         var CITYNAME = '?q=' + $stateParams.WeatherName;
         var API = '&appid=' + '4940bb3cb1a15ee656774f9cb04b0b78';
         var LANG = '&lang=fr';

         //Weather Service

         var API = 'http://api.openweathermap.org/data/2.5/weather' + CITYNAME + API + LANG;

         $http({
            method : "GET",
            url : API,
        }).then(function mySucces(response) {
            $scope.weather = response.data;
           console.log(response.data);
               }, function myError(response) {
            alert('meh');
    });

     $http({
        method : "GET",
        url : "http://onda-imad.herokuapp.com/arrivals"
    }).then(function Succes(response) {
        $scope.data = response.data;
        $scope.num = response.data.H;
        $ionicLoading.hide()
        console.log('WA IT WORKS');
    }, function Error(response) {
        $scope.text = true;
        $ionicLoading.hide()
        alert('erreur');
    });   

    $scope.openInAppBrowser = function(fl)
{
 // Open in app browser
 window.open('https://www.google.com/search?q=' + fl ,'_blank'); 
}; 
  
})

.controller('ArrivalsCtrl', function($scope){

  $scope.villes = [
  {
    "id": 1,
    "name": "Aeroport Agadir Al Massira",
    "WN": "Agadir"
  },
  {
    "id": 2,
    "name": "Aeroport Al Hoceima Al Charif Al Idrissi",
    "WN": "Al Hoceima"
  },
  {
    "id": 3,
    "name": "Aeroport Beni Mellal",
    "WN": "Beni Mellal"
  },
  {
    "id": 4,
    "name": "Aeroport Casablanca Mohammed V",
    "WN": "Casablanca"
  },
  {
    "id": 5,
    "name": "Aeroport Dakhla",
    "WN": "Dakhla"
  },
  {
    "id": 6,
    "name": "Aeroport Errachidia Moulay Ali Cherif",
    "WN": "Errachidia"
  },
  {
    "id": 7,
    "name": "Aeroport Essaouira Mogador",
    "WN": "Essaouira"
  },
  {
    "id": 8,
    "name": "Aeroport Fes Saïs",
    "WN": "Fès"
  },
  {
    "id": 9,
    "name": "Aeroport GUELMIM",
    "WN": "Guelmim"
  },
  {
    "id": 10,
    "name": "Aeroport Laayoune Hassan 1er",
    "WN": "Laayoune"
  },
  {
    "id": 11,
    "name": "Aeroport Marrakech - Menara",
    "WN": "Marrakech"
  },
  {
    "id": 12,
    "name": "Aeroport Nador Laroui",
    "WN": "Nador"
  },
  {
    "id": 13,
    "name": "Aeroport Ouarzazate",
    "WN": "Ouarzazate"
  },
  {
    "id": 14,
    "name": "Aeroport Oujda Angads",
    "WN": "Oujda"
  },
  {
    "id": 15,
    "name": "Aeroport Rabat-Sale",
    "WN": "Rabat"
  },
  {
    "id": 16,
    "name": "Aeroport TAN TAN",
    "WN": "TAN TAN"
  },
  {
    "id": 17,
    "name": "Aeroport Tanger Ibn Battouta",
    "WN": "Tanger"
  },
  {
    "id": 18,
    "name": "Aeroport Tetouan Saniat R'mel",
    "WN": "Tetouan"
  },
]
  
})

.controller('cityCtrl', function($scope, $stateParams, $http, $ionicLoading){

  $ionicLoading.show()

  $scope.date = new Date();
         $scope.cityName = $stateParams.cityName;
         $scope.name = $stateParams.name;
         $scope.WN = $stateParams.WeatherName;

         $scope.isCity = function(x){
    return (x.ville_aeroport == $stateParams.WeatherName);
};



         var CITYNAME = '?q=' + $stateParams.WeatherName;
         var API = '&appid=' + '4940bb3cb1a15ee656774f9cb04b0b78';
         var LANG = '&lang=fr';

         //Weather Service

         var API = 'http://api.openweathermap.org/data/2.5/weather' + CITYNAME + API + LANG;

         $http({
            method : "GET",
            url : API,
        }).then(function mySucces(response) {
            $scope.weather = response.data;
           console.log(response.data);
               }, function myError(response) {
               $scope.text = true; 
            alert('Veuillez vérifier votre connexion!');
    });

     $http({
        method : "GET",
        url : "http://onda-imad.herokuapp.com/users"
    }).then(function Succes(response) {
        $scope.data = response.data;
        $scope.num = response.data.H;
        console.log('WA IT WORKS');
        $ionicLoading.hide()
    }, function Error(response) {
        $scope.text = response.statusText;
        $ionicLoading.hide()
        alert('Erreur');
    });    

   

$scope.openInAppBrowser = function(fl)
{
 // Open in app browser
 window.open('https://www.google.com/search?q=' + fl ,'_blank'); 
};
  
})

.controller('bycityCtrl', function($scope, $stateParams){

                  $scope.villes = [
  {
    "id": 1,
    "name": "Aeroport Agadir Al Massira",
    "WN": "Agadir"
  },
  {
    "id": 2,
    "name": "Aeroport Al Hoceima Al Charif Al Idrissi",
    "WN": "Al Hoceima"
  },
  {
    "id": 3,
    "name": "Aeroport Beni Mellal",
    "WN": "Beni Mellal"
  },
  {
    "id": 4,
    "name": "Aeroport Casablanca Mohammed V",
    "WN": "Casablanca"
  },
  {
    "id": 5,
    "name": "Aeroport Dakhla",
    "WN": "Dakhla"
  },
  {
    "id": 6,
    "name": "Aeroport Errachidia Moulay Ali Cherif",
    "WN": "Errachidia"
  },
  {
    "id": 7,
    "name": "Aeroport Essaouira Mogador",
    "WN": "Essaouira"
  },
  {
    "id": 8,
    "name": "Aeroport Fes Saïs",
    "WN": "Fès"
  },
  {
    "id": 9,
    "name": "Aeroport GUELMIM",
    "WN": "Guelmim"
  },
  {
    "id": 10,
    "name": "Aeroport Laayoune Hassan 1er",
    "WN": "Laayoune"
  },
  {
    "id": 11,
    "name": "Aeroport Marrakech - Menara",
    "WN": "Marrakech"
  },
  {
    "id": 12,
    "name": "Aeroport Nador Laroui",
    "WN": "Nador"
  },
  {
    "id": 13,
    "name": "Aeroport Ouarzazate",
    "WN": "Ouarzazate"
  },
  {
    "id": 14,
    "name": "Aeroport Oujda Angads",
    "WN": "Oujda"
  },
  {
    "id": 15,
    "name": "Aeroport Rabat-Sale",
    "WN": "Rabat"
  },
  {
    "id": 16,
    "name": "Aeroport TAN TAN",
    "WN": "TAN TAN"
  },
  {
    "id": 17,
    "name": "Aeroport Tanger Ibn Battouta",
    "WN": "Tanger"
  },
  {
    "id": 18,
    "name": "Aeroport Tetouan Saniat R'mel",
    "WN": "Tetouan"
  },
]

});



