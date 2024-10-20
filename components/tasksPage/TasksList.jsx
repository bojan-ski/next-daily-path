'use client'
import { useEffect } from "react"
// context
import { useGlobalContext } from "@/app/context"
// components
import Task from "./Task"
import Pagination from "../Pagination"

const TasksList = () => {
    const { userProfileDetails, tasks, getTasksList, page } = useGlobalContext()

    useEffect(() => {
        console.log('useEffect - TasksList');
        const getTasksListFromDB = async () => {
            if (userProfileDetails.userLoggedIn && userProfileDetails.userID) {
                console.log('useEffect - fetchTasks');
                await getTasksList();
            }
        };

        getTasksListFromDB();
    }, [userProfileDetails.userID]);

    return (
        <section className='tasks-list mb-10'>
            {tasks && tasks.length > 0 ? (
                <>
                    <h2 className='text-4xl text-center font-bold mb-10'>
                        Tasks List
                    </h2>

                    <div className="tasks mb-10">
                        {tasks.map(task => <Task key={task.docID} task={task} />)}
                    </div>

                    <Pagination page={page} getPageContentData={getTasksList} />
                </>
            ) : (
                <h2 className='text-4xl text-center font-bold'>
                    No tasks found
                </h2>
            )}
        </section>
    )
}

export default TasksList