import { loadAbort } from "../utilities/load-abort-axios.utility"
import axios from 'axios';

export const getAllTasks =() =>{
    const controller = loadAbort();
    return {call: axios.get<any>('https://localhost:7150/get-all-tasks', {signal: controller.signal}), 
    controller
   };
}