'use client'
// context
import { useGlobalContext } from "@/app/context"
// custom hook
import useTasksPagination from "@/hooks/useTasksPagination"
// components
import FormNewTask from "./FormNewTask"
import TasksList from "./TasksList"

const TasksListContainer = () => {
    const { userProfileDetails } = useGlobalContext()
    const itemsPerPage = 10;
    const { tasks, getTasksList, page } = useTasksPagination(userProfileDetails.userID, itemsPerPage);

    return (
        <>
            <FormNewTask userID={userProfileDetails.userID} getTasksList={getTasksList} />
            <TasksList userProfileDetails={userProfileDetails} tasks={tasks} getTasksList={getTasksList} page={page} />
        </>
    )
}

export default TasksListContainer