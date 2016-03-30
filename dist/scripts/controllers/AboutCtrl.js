(function(){
  function AboutCtrl(){
    console.log('about hit');
  }

  angular
    .module('pomodoro')
    .controller('AboutCtrl', AboutCtrl);
})();
