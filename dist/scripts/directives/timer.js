(function(){
  //Constants
  var workSessionLength = 1500; // regular work session for 25min
  var restSessionLength = 300; // regular rest session for 5min
  var megaRestSessionLength = 1800; // mega rest session for 30min

  var lengthOfSession = function(sessionNumber){
    if(sessionNumber % 2 !== 0){ //if session number is odd, then regular work session
      return workSessionLength;
    } else if (sessionNumber % 8 == 0){ //if divisible by 8, it's mega break
      return megaRestSessionLength;
    } else {
      return restSessionLength; //if even and not divisible by 8, regular break
    }
  };
  function timer($interval, $filter){
    return {
      templateUrl: 'templates/directives/timer.html',
      replace: true,
      restrict: 'E',
      scope: {
        onChange: '&'
      },
      link: function(scope, element, attributes){
        scope.timer = "00:00";
        scope.isCounting = false;
        scope.numberOfSessions = 1;
        scope.activity = "Let's get to work!";
        scope.button = "Work for 25 minutes";
        scope.typeOfSession = "Working";
        scope.numberOfWorkSessions = 0;
        var counter; //holds promise
        scope.startSession = function(){
          if(scope.isCounting) //if clock is running, then this is a reset.
            return function(){
              scope.isCounting = false;
              scope.activity = "Timer stopped with " + $filter('timecode')(scope.timer) + " left on the clock.";
              scope.timer = "00:00";
              $interval.cancel(counter);
            }();
          var sessionNum = lengthOfSession(scope.numberOfSessions); //start counting
          scope.activity = scope.typeOfSession + " for " + $filter('timecode')(sessionNum) + " minutes";
          scope.isCounting = true;
          scope.timer = sessionNum;
          counter = $interval(function(){
            scope.timer = scope.timer - 1;
            if(scope.timer < 1 && scope.isCounting){ //a session is completed
              scope.stopSession(counter);
              scope.setTimer();
            }
          }, 1000, 0 );
        };

        scope.stopSession = function(promise){
          $interval.cancel(promise);
          scope.isCounting = false;
          scope.numberOfSessions++;
          document.getElementById('player').play();
          if(scope.typeOfSession == "Working")
            scope.numberOfWorkSessions++;
        };

        scope.setTimer = function(){
          var sessionLength = lengthOfSession(scope.numberOfSessions);
          if(sessionLength == 1800){ // set timer to 30 minutes
              scope.timer = 1800;
              scope.activity = "Great Job! Time for a big break!";
              scope.button = "Rest for 30 minutes";
              scope.typeOfSession = "Resting"
          } else if(sessionLength == 300) { // set timer to 5 minutes
              scope.timer = 300;
              scope.activity = "Great Job! Time for a short break!";
              scope.button = "Rest for 5 minutes";
              scope.typeOfSession = "Resting"
          } else if(sessionLength == 1500) { //it's time to work
            scope.timer = 1500 // set timer to 25 minutes
            scope.activity = "Let's get back to it!";
            scope.button = "Work for 25 minutes";
            scope.typeOfSession = "Working"
          } else {
            console.log("SOMETHING WENT HORRIBLY WRONG");
          }
        };

      }
    };
  }

  angular
    .module('pomodoro')
    .directive('timer', ['$interval', '$filter', timer]);
})();
