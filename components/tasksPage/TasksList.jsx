'use client'
import { useEffect, useState } from "react"
// context
import { useGlobalContext } from "@/app/context"
// lib - firebase
import getTasksList from "@/lib/firebase/getTasksList"
// components
import TaskItem from "./TaskItem"

const TasksList = () => {
    const { userProfileDetails } = useGlobalContext()
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        if (!userProfileDetails.userID) return;

        const apiCall = await getTasksList(userProfileDetails.userID);
        // console.log(apiCall);           

        if (!apiCall.error) {
            setTasks(apiCall);
        } else {
            console.log(apiCall.error);
        }
    };

    useEffect(() => {
        console.log('useEffect - TasksList');
        fetchTasks();
    }, []);

    // console.log(tasks);    

    return (
        <section className='tasks-list mb-10'>
            {tasks && tasks.length > 0 ? (
                <>
                    <h2 className='text-stone-950 text-3xl text-center font-bold mb-7'>
                        Tasks List
                    </h2>
                    {tasks.map(task => <TaskItem key={task.docID} task={task} onPageUpdate={fetchTasks} />)}
                </>
            ) : (
                <h2 className='text-stone-950 text-stone-950 text-3xl text-center font-bold'>
                    No tasks found
                </h2>
            )}
        </section>
    )
}

export default TasksList