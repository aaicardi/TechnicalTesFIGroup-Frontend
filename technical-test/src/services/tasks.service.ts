import axios from 'axios';
import { Tasks } from '../models/tasks.model';


const tasksApi = axios.create({
baseURL: 'https://localhost:7150'
})

export const getAllTasks = async () => {
    const res = await tasksApi.get('/get-all-tasks')
    return res.data.data;
}

export const createTask = (params:Tasks) => tasksApi.post('/create-tasks', params)

export const deleteTask = (id:number) => tasksApi.delete('/' +id+'/delete-tasks')

export const updateTask = (params:Tasks) => tasksApi.put('/update-tasks', params)