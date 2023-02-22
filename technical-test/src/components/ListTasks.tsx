import { Button } from '@mui/material';
import { Tasks } from '../models/tasks.model';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAllTasks, deleteTask, updateTask } from '../services/tasks.service'
export const ListTask = () => {
 
    const queryClient = useQueryClient();
    const { isLoading, data: listTask, isError, error } = useQuery({
        queryKey: ['listTask'],
        queryFn: getAllTasks
    });

   const deleteTaskMutation = useMutation({
        mutationFn: deleteTask,
        onSuccess: () =>{
            queryClient.invalidateQueries(['listTask']);
        }
    });

    const updateTaskMutation = useMutation({
        mutationFn: updateTask,
        onSuccess: () =>{
            queryClient.invalidateQueries(['listTask']);
        }
    });

     if (isLoading) return <div>Loading...</div>
    else if (isError) return <div>Error</div>   

    return (
        <>
            <h1>TO DO LIST</h1>        
            <div className={'App-container'}>
                <table>
                <tr>
                    <th></th>      
                    <th>Task</th> 
                    <th></th>  
                            
                </tr>
                    {
                        listTask.map((task: Tasks) => {
                            return (
                                <tr key={task.id}>
                                     <td>
                                        <input type="checkbox" 
                                        checked={task.isCompleted}
                                              onChange={e =>{
                                                updateTaskMutation.mutate({
                                                    ...task,
                                                    isCompleted: e.target.checked
                                                })
                                        }} ></input>
                                      </td>
                                      <td>                                     
                                        {task.description}
                                      </td>
                                      <td><Button variant="text" onClick={()=>{
                                            deleteTaskMutation.mutate(task.id);
                                      }}>Delete</Button></td>                        
                                </tr>                              
                            )})

                    }
                </table>
            </div>

        </>

    );
};

export default ListTask;