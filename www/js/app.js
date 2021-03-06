// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

     var notificationOpenedCallback = function(jsonData) {
    console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal.init("SECRET",
                                 {googleProjectNumber: "536333626971"},
                                 notificationOpenedCallback);
  
  // Show an alert box if a notification comes in when the user is in your app.
  window.plugins.OneSignal.enableInAppAlertNotification(true);
  });

  
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.departures', {
    url: '/departures',
    views: {
      'menuContent': {
        templateUrl: 'templates/departures.html',
        controller: 'DeparturesCtrl'
      }
    }
  })

  .state('app.arrivals', {
      url: '/arrivals',
      views: {
        'menuContent': {
          templateUrl: 'templates/arrivals.html',
          controller: 'ArrivalsCtrl'
        }
      }
    })

    .state('app.arrivalsb', {
      url: '/arrivals/:cityName',
      params: {
        name: null,
        WeatherName: null
      },
      views: {
        'menuContent': {
          templateUrl: 'templates/arrival.html',
          controller: 'ArrivalCtrl'
        }
      }
    })

    .state('app.bycity', {
      url: '/bycity',
      views: {
        'menuContent': {
          templateUrl: 'templates/bycity.html',
          controller: 'bycityCtrl'
        }
      }
    })
    .state('app.city', {
      url: '/bycity/:cityName',
      params: {
         name: null,
         WeatherName: null
       },
      views: {
        'menuContent': {
          templateUrl: 'templates/city.html',
          controller: 'cityCtrl'
        }
      }
    })

  .state('app.byfn', {
    url: '/byfn',
    views: {
      'menuContent': {
        templateUrl: 'templates/byfn.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/departures');
});
