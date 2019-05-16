import axios from 'axios';
const base_url = '/api/spotify-song';

export default {

    getOneSpotSong(spotSong){
        return axios.getAll(base_url+spotSong).then(response=>{
            return response.data
        })
    },
    searchArtist(artistName){
        return axios.get(base_url+artistName).then(response=>{
            return response.data
        })
    },

    getAllSpotSong(){
        return axios.get(base_url).then(response=>{
            return response.data
        })
    }
}