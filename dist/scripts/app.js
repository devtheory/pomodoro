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
      });
  }

  angular
    .module('pomodoro', ['ui.router'])
    .config(config);
})();
