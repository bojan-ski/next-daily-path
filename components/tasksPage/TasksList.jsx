'use client'
import { useEffect, Suspense } from "react"
// context
import { useGlobalContext } from "@/app/context"
// custom hook
import useTasksPagination from "@/hooks/useTasksPagination"
// components
import TaskItem from "./TaskItem"
import TasksListPagination from "./TasksListPagination"

const TasksList = () => {
    // const { userProfileDetails, tasks, fetchTasks } = useGlobalContext()
    const { userProfileDetails } = useGlobalContext()
    const itemsPerPage = 6;
    const { tasks, getTasksList, page } = useTasksPagination(userProfileDetails.userID, itemsPerPage);

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
                    <Suspense fallback={<p>Loading feed...</p>}>
                        <h2 className='text-stone-950 text-3xl text-center font-bold mb-7'>
                            Tasks List
                        </h2>

                        <div>
                            {tasks.map(task => <TaskItem key={task.docID} task={task} />)}  
                        </div>

                        <TasksListPagination page={page} getTasksList={getTasksList} />
                    </Suspense>
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