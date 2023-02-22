import {useMutation, useQueryClient} from '@tanstack/react-query';
import { Tasks } from '../models/tasks.model';
import {createTask} from '../services/tasks.service'
export const TaskForm = () => {

 
    const queryClient = useQueryClient();
   const addTaskMutation = useMutation({
        mutationFn:createTask,
        onSuccess: () =>{
          queryClient.invalidateQueries(['listTask']);
        }
    })

      const handleSubmit = (e: any)=> {
        e.preventDefault();
      
        const formData = new FormData(e.target);
        const task = Object.fromEntries(formData);
         let data: Tasks = {
            description: task.name.toString(),
            id: 0,
            isCompleted: false
        };
        addTaskMutation.mutate(data);
      }

    return (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Task</label>
            <br></br>
            <input type="text" id="name" name="name"/>
            <br></br>
            <button>
                Add Task
            </button>
          </form>

        </>

    );
};

export default TaskForm;
