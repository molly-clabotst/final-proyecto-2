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
      // this.updateTasks()
    },
    methods:{
      newTaskAdded(task){
        // TODO: add song to song table
        this.$task_api.addTask(task).then(task=>{
          // this.updateTasks()
        }).catch(err=>{
          let msg = err.response.data.join(', ');
          alert('Error adding task.\n'+msg)
        })
      // TODO: create delete songs method and surrounding infrastructure
      // updateTasks(){
      //   this.$task_api.getAllTasks().then( tasks=>{
      //     this.tasks = tasks
      //   })
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
