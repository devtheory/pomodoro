(function(){
  function TasksCtrl(Tasks){
    this.task = "";
    this.tasks = Tasks.list;

    this.addTask = function(){
      Tasks.list.$add({task_name: this.task, created_at: Date.now()});
      this.task = "";
    };

    this.removeTask = function(task){
      Tasks.list.$remove(task);
    };

  }

  angular
    .module('pomodoro')
    .controller('TasksCtrl', ['Tasks', TasksCtrl])
})();
