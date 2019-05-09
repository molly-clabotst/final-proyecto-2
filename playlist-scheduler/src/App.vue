<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TasksForm v-on:task-added="newTaskAdded"></TasksForm>
    <Playlist v-bind:tasks="tasks"></Playlist>
  </div>
</template>

<script>
  import TasksForm from './components/TasksForm.vue'
  import Playlist from './components/Playlist'
  export default {
    name: 'app',
    components: {
      TasksForm,
      Playlist
    },
    data(){
      return{
        tasks:[]
      }
    },
    mounted(){
      this.updateTasks()
    },
    methods:{
      newTaskAdded(task){
        // TODO: is there a special way to validate that one task starts after the other is complete?
        // TODO: show user an error message
        this.$task_api.addTask(task).then(task=>{
          this.updateTasks()
        })
        // this.tasks.push(task);
        // var tisks = this.tasks;
        // for (var i = 0; i < tisks.length; i++) {
        //
        //   // console.log(this.tasks[i])
        // }
        //
        // // add task to list of tasks
        // // sort them according to when they start
        // if(this.tasks.length>1)
        //
        //   // sorting the entries into the task list
        //   this.tasks.sort(function (t1, t2) {
        //     // if thing is positive then task 1 starts after task 2 and so on
        //     let thing = t1.stert-t2.stert;
        //     // if task one starts first
        //     if(thing<0){
        //       // check if task 2 starts after task 1 ends
        //       let otherThing = t1.end - t2.stert;
        //       // if task 2 starts before task 1 ends shows error message in the console
        //       if (otherThing>=0){
        //         //TODO: show user error message
        //         //TODO: how to prevent the entry from existing
        //         console.log("One task must end before the other begins")
        //       }
        //       // the tasks would be starting concurrently
        //     }else if (thing===0){
        //       console.log("No multitasking allowed")
        //       // if task 2 starts first
        //     } else {
        //       // make sure task 1 ends before task 2 starts
        //       let otherThing = t2.end-t1.stert;
        //       if(otherThing>=0){
        //         console.log("One task must end before the other begins")
        //       }
        //     }
        //     return thing
        //   });
      },
      updateTasks(){
        this.$task_api.getAllTasks().then( tasks=>{
          this.tasks = tasks
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
