(function(){
  function config($stateProvider, $locationProvider){
    $locationProvider
      .html5Mode({
        enabled: true, //for no hashbang urls
        requireBase: false //helps prevent location errors
      });

    $stateProvider
      .state('landing', {
        url: '/',
        controller: 'LandingCtrl as landing',
        templateUrl: 'templates/landing.html'
      })
      .state('about', {
        url: '/about',
        controller: 'AboutCtrl as about',
        templateUrl: 'templates/about.html'
      })
      .state('dashboard', {
        url: '/dashboard',
        controller: 'DashboardCtrl as dashboard',
        templateUrl: 'templates/dashboard.html'
      });
  }

  angular
    .module('pomodoro', ['ui.router', 'firebase'])
    .config(config)
    .constant('FIREBASE_URL', 'https://devtheory-pomodoro.firebaseio.com/tasks');
})();
