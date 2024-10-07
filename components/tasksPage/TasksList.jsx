'use client'
import { useEffect, useState } from "react"
// context
import { useGlobalContext } from "@/app/context"
// lib - firebase
import getTasksList from "@/lib/firebase/getTasksList"

const TasksList = () => {
    const { userProfileDetails } = useGlobalContext()
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        console.log('useEffect - TasksList');
        
        if (!userProfileDetails.userID) return;

        const fetchTasks = async () => {
            const apiCall = await getTasksList(userProfileDetails.userID);
            // console.log(apiCall);           

            if(!apiCall.error){
                setTasks(apiCall);  
            }else{
                console.log(apiCall.error);                
            }
        };

        fetchTasks();
    }, [userProfileDetails.userID]);

    // console.log(tasks);    

    return (
        <section className='tasks-list mb-10'>
            <h2>Tasks List</h2>
            {tasks && tasks.length > 0 ? (
                tasks.map(task => (
                    <div key={task.docID}>
                        <h2>{task.taskData.taskTitle}</h2>
                        <p>{task.taskData.taskContent}</p>
                    </div>
                ))
            ) : (
                <p>No tasks found.</p>
            )}
        </section>
    )
}

export default TasksList