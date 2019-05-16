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
                <select v-model="songData" v-on:select="sendSong" multiple>
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
                newSongName: '',
                selected: '',
                options:[],
                // option:[],
                songData: [],
            }
        },
        methods:{
            searchSong(){
                // TODO: connect to spotify api to search via these choices
                if (this.selected.localeCompare('album')){
                    this.songData = '';
                }else if (this.selected.localeCompare('artist')){
                    this.$spotify_song_api.searchArtist(this.newSongName).then(songsByArtist=>{
                        this.songData = songsByArtist;
                    });

                }else if (this.selected.localeCompare('genre')) {
                    this.songData = '';
                }else if (this.selected.localeCompare('song')){
                    this.$spotify_song_api.getOneSpotSong(this.newSongName).then(foundSong=>{
                        this.songData = foundSong;
                    })
                }
                this.newSongName = '';
                this.selected = '';
            },
            sendSong(){
                this.$song_chose_api.addSongToDatabase(this.option);
                this.$emit('song-found',this.newSongName)
            }
        }
    }
</script>

<style scoped>

</style>