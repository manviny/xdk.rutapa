// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.routes', 'starter.factories'])

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
  });
});


// LOGIN WITH CREDENTIALS
// .config([
  
//     "$httpProvider",
//     function($httpProvider){
//         // $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
//         $httpProvider.defaults.useXDomain = true;
//         $httpProvider.defaults.withCredentials = true;
//         delete $httpProvider.defaults.headers.common['X-Requested-With']; 
//         // avoids prelight 
//         $httpProvider.defaults.headers.common = {};
//         $httpProvider.defaults.headers.post = {};
//         $httpProvider.defaults.headers.put = {};
//         $httpProvider.defaults.headers.patch = {};      
//     }
// ])