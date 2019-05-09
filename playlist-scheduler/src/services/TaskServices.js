import axios from 'axios'

const base_url = '/api/tasks';
export default {

    getAllTasks(){
        return axios.get(base_url).then(response=>{
            return response.data
        })
    },
    addTask(task){
        return axios.get(base_url).then(response=>{
            return response.data
        })
    }
}