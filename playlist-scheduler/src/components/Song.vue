<template>
    <div id="Song">
        <label for="choose-song">Select Song!</label>
        <div class="row">
            <div class="col sm-5">
                <div class="form-group">
                    <select required id="choose-song" class="form-control">
                        <option>Please select a search criterion</option>
                        <option value="album">Album</option>
                        <option value="artist">Artist</option>
                        <option value="genre">Genre</option>
                        <option value="song">Song</option>
                    </select>
                </div>
            </div>
            <div class="col sm-5">
                <input id="chose-song" class="form-control" v-model="newSongName">
            </div>
            <div class="col xl-2">
                <button class="btn btn-primary" v-on:click.prevent="searchSongs">Search Songs</button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Song",
        data(){
            return{
                newSongName: '',
            }
        },
        methods:{
            searchSongs(){
                if(this.newSongName){
                    this.$emit('song-found',this.newSongName)
                }
            }
        }
    }
</script>

<style scoped>

</style>