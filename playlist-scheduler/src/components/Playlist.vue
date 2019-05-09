<template>
    <div id="Playlist">
        <div class="card task-playlist m-2 p-2">
            <h4 class="card-title">Tasks</h4>
            <div id="playlist-table">
                <tr>
                    <th>Task</th>
                    <th>Duration</th>
                    <th>Song</th>
                </tr>
                <tr v-for="task in tasks">
                    <td>{{task.taskName}}</td>
                    <td>{{task.taskDuration}}</td>
                    <td>{{task.song}}</td>
                </tr>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Playlist",
        props:{
            tasks: Array
        },
        methods:{
            // deleted(task){
            //
            // }
        }
    }
</script>

<style scoped>

</style>