(function(){
  function LandingCtrl(){
    this.heroTitle = "Let's get it done!";
  }

  angular
    .module('pomodoro')
    .controller('LandingCtrl', LandingCtrl);
})();
