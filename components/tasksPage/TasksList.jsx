'use client'
import { useEffect } from "react"
// context
import { useGlobalContext } from "@/app/context"
// components
import TaskItem from "./TaskItem"

const TasksList = () => {
    const { tasks, fetchTasks } = useGlobalContext() 
   
    useEffect(() => {
        console.log('useEffect - TasksList');
        fetchTasks();
    }, []);

    return (
        <section className='tasks-list mb-10'>
            {tasks && tasks.length > 0 ? (
                <>
                    <h2 className='text-stone-950 text-3xl text-center font-bold mb-7'>
                        Tasks List
                    </h2>
                    {tasks.map(task => <TaskItem key={task.docID} task={task} />)}
                </>
            ) : (
                <h2 className='text-stone-950 text-3xl text-center font-bold'>
                    No tasks found
                </h2>
            )}
        </section>
    )
}

export default TasksList