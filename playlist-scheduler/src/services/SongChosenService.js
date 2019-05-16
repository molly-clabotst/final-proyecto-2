import axios from 'axios';
const  base_url = '/api/song-chose';

export default {
    getOneSong(songName){
        return axios.get(base_url+ songName).then( response =>{
            return response.data
        })
    },
    getAllSongs(){
        return axios.get(base_url).then(response=>{
            return response.data
        })
    },
    addSongToDatabase(songName){
        return axios.post(base_url).then( response=>{
            return response.data
        })
    }
}