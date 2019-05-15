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
                    <input id="task-name"  class="form-control" v-model.trim="newTaskName" required>
                </div>
                <div class="form-group">
                    <label for="task-start">Task Start</label>
<!--                    Time input type controls the range of input to time strings only -->
<!--                    Value sets the default value of the of the time input to avoid nullness-->
                    <input id="task-start" type="time" class="form-control"
                           v-model="newTaskStart" value="13:30" required>
                </div>
                <div class="form-group">
                    <label for="task-end">Task End</label>
                    <input id="task-end" TYPE="time" class="form-control"
                           v-model="newTaskEnd" value="13:31" required>
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
                song: 'lies',
            }
        },
        methods:{
            calcDur(){
                // taking the entered timesand spliting it into hour and minutes
                var begin = this.newTaskStart.split(':');
                var finish = this.newTaskEnd.split(':');
                // changing the entered times from strings into numbers
               var hourB = parseInt(begin[0]);
               var minB = parseInt(begin[1]);
               var hourF = parseInt(finish[0]);
               var minF = parseInt(finish[1]);
                // calculating the difference in times
                if (hourB===hourF){
                    var diff = minF-minB;
                } else if (hourB>hourF){
                    // TODO: confirm that alert is in the correct syntax
                    alert('Please be sure that task ends before it starts')
                } else{
                    var hourDiff = hourF-hourB;
                    diff = minF-minB;
                    diff += hourDiff;
                }
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
                    let task={taskName: this.newTaskName, taskDuration: this.dura, song: this.song};
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