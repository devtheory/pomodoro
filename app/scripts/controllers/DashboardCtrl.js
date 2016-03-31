(function(){
  var countDownFrom = function(){
    console.log('tset');
  }

  var toTime = function(num){
    var minutes = 0;
    var seconds = 0
    while(num >= 60){
        num -= 60
        minutes += 1
    }
    seconds = num

    if(seconds < 10)
    	seconds = "0" + seconds;

    return minutes + ":" + seconds
  };

  function DashboardCtrl(){

  }

  angular
    .module('pomodoro')
    .controller('DashboardCtrl', DashboardCtrl);
})();
