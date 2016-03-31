(function(){
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
        scope.canTakeBreak = false;
        scope.isCounting = false;
        scope.activity = "Let's get to work!";
        var counter; //holds promise
        scope.startSession = function(task, time){
          if(scope.isCounting)
            return function(){
              scope.isCounting = false;
              scope.activity = "Timer stopped with " + $filter('timecode')(scope.timer) + " left on the clock.";
              scope.timer = "00:00";
              $interval.cancel(counter);
            }();
          scope.activity = task + " for " + $filter('timecode')(time) + " minutes";
          scope.isCounting = true;
          scope.timer = time;
          counter = $interval(function(){
            scope.timer = scope.timer - 1;
            if(scope.timer < 1 && scope.isCounting){
              scope.stopSession(counter);
              scope.isCounting = false;
              scope.canTakeBreak = !scope.canTakeBreak;
              scope.timer = "Time's Up!";
              scope.activity = scope.canTakeBreak ? "Great Job! You deserve that break!"
                                                  : "Let's get back to it!";
            }
          }, 1000, 0 );
        };

        scope.stopSession = function(promise){
          $interval.cancel(promise);
        };

      }
    };
  }

  angular
    .module('pomodoro')
    .directive('timer', ['$interval', '$filter', timer]);
})();
