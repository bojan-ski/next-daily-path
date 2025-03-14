'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// context
import { useGlobalContext } from "@/app/context";
// components
import Task from "./Task";
import Pagination from "../Pagination";
// toast
import toast from "react-hot-toast";


const TasksList = () => {
    const router = useRouter();
    const { userProfileDetails, tasks, getTasksList, page, isLoading } = useGlobalContext();

    // Redirect if user is not logged in
    useEffect(() => {
        if (!userProfileDetails?.userLoggedIn) {
            toast.error('You need to have an account, in order to access the Tasks')
            return router.push('/')
        }
    }, [userProfileDetails.userLoggedIn, router]);

    // fetch page content
    useEffect(() => {
        const getTasksListFromDB = async () => {
            if ((userProfileDetails?.userLoggedIn && userProfileDetails?.userID) && tasks.length == 0) await getTasksList();
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

                    <Pagination page={page} getPageContentData={getTasksList} isLoading={isLoading}/>
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