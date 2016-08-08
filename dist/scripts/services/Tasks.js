(function(){
  function Tasks($firebaseArray, FIREBASE_URL){
    var Tasks = {};
    // var list = $firebaseArray(new Firebase(FIREBASE_URL));
    var ref = firebase.database().ref().child("tasks");
    var list = $firebaseArray(ref);

    Tasks.list = list;

    return Tasks;
  }

  angular
    .module('pomodoro')
    .factory('Tasks', ['$firebaseArray', 'FIREBASE_URL', Tasks])
})();
