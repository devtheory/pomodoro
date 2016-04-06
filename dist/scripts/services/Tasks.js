(function(){
  function Tasks($firebaseArray, FIREBASE_URL){
    var Tasks = {};
    var list = $firebaseArray(new Firebase(FIREBASE_URL));

    Tasks.list = list;

    return Tasks;
  }

  angular
    .module('pomodoro')
    .factory('Tasks', ['$firebaseArray', 'FIREBASE_URL', Tasks])
})();
