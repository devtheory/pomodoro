(function(){
  function timecode(){
    return function(num){

      if(isNaN(num))
        return "--:--";
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
    }
  }

  angular
    .module('pomodoro')
    .filter('timecode', timecode);
})();
