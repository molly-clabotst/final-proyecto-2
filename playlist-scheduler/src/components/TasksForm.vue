<template>
    <div id="TasksForm">
        <div class="alert alert-danger" v-show="errors && errors.length>0">
            <li v-for="error in errors">{{error}}</li>
        </div>
        <div class="card add-task m-2 p-2">
            <form>
                <h4 class="card-title">Add Task</h4>
                <div class="form-group">
                    <label for="task-name">Task Name</label>
                    <!--                    TODO: add a v-show in order to create an editing mode-->
                    <input id="task-name" class="form-control" v-model.trim="newTaskName">
                    <!--                    <label v-show="edit">{{name}}</label>-->
                </div>
                <div class="form-group">
                    <label for="task-start">Task Start</label>
                    <!--                    TODO: add a v-show in order to create an editing mode-->
                    <input id="task-start" class="form-control" v-model.trim="newTaskStart">
                    <!--<label v-show="edit">{{start}}</label>-->
                </div>
                <div class="form-group">
                    <label for="task-end">Task End</label>
                    <input id="task-end" class="form-control" v-model.trim="newTaskEnd">
                    <!--<label v-show="edit">{{end}}</label>-->
                </div>
                <Song v-on:song-found="addSong"></Song>
                <button class="btn btn-primary" v-on:click.prevent="addTask">Add Task</button>
            </form>
        </div>
    </div>
</template>

<script>
    import Song from "./Song.vue"

    export default {
        name: "Task",
        components:{
            Song
        },
        data(){
            return{
                newTaskName: '',
                newTaskStart:'',
                newTaskEnd: '',
                errors: [],
                dura: 0,
                date1: new Date(),
                date2: new Date(),
                song: 'lies',
            }
        },
        methods:{
            calcDur(){
                // taking the entered timesand spliting it into hour and minutes
                var field1 = this.newTaskStart.split(':');
                var field2 = this.newTaskEnd.split(':');
                // changing the entered times from strings into dates
                var date1 = new Date(2000,0,1,field1[0],field1[1]);
                var date2 = new Date(2000,0,1,field2[0],field2[1]);
                // calculating the difference in times
                var diff = date2-date1;
                // converting it from milliseconds to minutes
                //TODO: take into account for tasks greater than one hour
                diff= diff/60000;
                // set the value of the duration to the difference in start and end times
                this.dura = diff;
            },
            addTask(){
                // reset errors array to empty
                this.errors=[];
                // call method in order to calculate the difference
                this.calcDur();
                // check to make sure that the inputs have values
                if (this.newTaskName&& this.newTaskStart && this.newTaskEnd){
                    // create array to transfer data
                    let task={taskName: this.newTaskName,stert: this.date1, end: this.date2, taskDuration: this.dura, song: this.song};
                    // emit array to parent app.vue
                    this.$emit('task-added',task);
                    // clear inputs
                    this.newTaskName='';
                    this.newTaskStart='';
                    this.newTaskEnd='';
                }
            },
            addSong(sohng){
                this.song = sohng;
            }
        }
    }
</script>

<style scoped>

</style>