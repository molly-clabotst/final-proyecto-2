import axios from 'axios'

const base_url = '/api/tasks';
export default {

    getOneTask(taskName){
        return axios.get('/api/tasks/'+taskName).then(response=>{
            return response.data
        })
    },
    getAllTasks(){
        return axios.get(base_url).then(response=>{
            return response.data
        })
    },
    addTask(task){
        return axios.post(base_url).then(response=>{
            return response.data
        })
    },
    // TODO: when to use this
    // updateTask(task){
    //     return.axios.patch(`${base_url}/${task.id}`, task).then(response=>{
    //         return response.data
    //     })
    // }
}