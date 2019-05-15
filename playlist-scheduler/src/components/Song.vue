<template>
    <div id="Song">
<!--        clara repo employee laptops-->
        <label for="choose-song">Select Song!</label>
        <div class="row">
            <div class="col sm-5">
                <div class="form-group">
                    <select required id="choose-song" class="form-control" v-model="selected">
                        <option disabled>Please select an option</option>
                        <option value="album">Album</option>
                        <option value="artist">Artist</option>
                        <option value="genre">Genre</option>
                        <option value="song">Song</option>
                    </select>
                </div>
            </div>
            <div class="col sm-5">
<!--                choose song or key word to search with-->
                <input id="chose-song" class="form-control" v-model="newSongName">
<!--                TODO: is there any way to limit the number of entries shown and force a scroll?-->
<!--                select song from list and send song to task-->
                <select v-model="songs" v-on:select="sendSong" multiple>
                    <option v-for="option in options" v-bind:value="option.value">
                        {{option.text}}
                    </option>
                </select>
            </div>
            <div class="col xl-2">
                <button class="btn btn-primary" v-on:click.prevent="searchSong">Search Songs</button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Song",
        data(){
            return{
                songs:'lies',
                newSongName: '',
                selected: '',
                options:[],
                songData: [],
            }
        },
        methods:{
            searchSong(){
                // TODO: include a decision tree that searches through songs based on the combobox
                if (this.selected.localeCompare('album')){
                    this.songData = '';
                }else if (this.selected.localeCompare('artist')){
                    this.songData = '';
                }else if (this.selected.localeCompare('genre')) {
                    this.songData = '';
                }else if (this.selected.localeCompare('song')){
                    this.songData = '';
                }


                this.pushSongToList()
            },
            pushSongsToList(){

            },
            sendSong(){
                if(this.newSongName){
                    this.$emit('song-found',this.newSongName)
                }
            }
        }
    }
</script>

<style scoped>

</style>