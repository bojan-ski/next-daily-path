'use client'
import { useEffect, Suspense } from "react"
// components
import Task from "./Task"
import Pagination from "../Pagination"
// loading
import Loading from "@/app/loading"

const TasksList = ({ userProfileDetails, tasks, getTasksList, page }) => {
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
                    <Suspense fallback={<Loading />}>
                        <h2 className='text-4xl text-center font-bold mb-10'>
                            Tasks List
                        </h2>

                        <div className="tasks">
                            {tasks.map(task => <Task key={task.docID} userProfileDetails={userProfileDetails} task={task} getTasksList={getTasksList}/>)}
                        </div>

                        <Pagination page={page} getPageContentData={getTasksList} />
                    </Suspense>
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