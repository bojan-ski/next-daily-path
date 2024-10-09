import { useTransition } from "react"
// lib - actions
import { deleteTaskAction } from "@/lib/actions"

const DeleteTaskBtn = ({ userID, taskID, tasks, setTasks }) => {   
    const [isPending, startTransition] = useTransition()

    const handleDeleteTask = () => {
        startTransition(() => deleteTaskAction(userID, taskID))
        const updatedTasksList = tasks.filter(task => task.docID !== taskID)
        setTasks(updatedTasksList)
    }    

    return (
        <button className='btn btn-sm btn-error' onClick={handleDeleteTask} disabled={isPending}>
            Delete
        </button>
    )
}

export default DeleteTaskBtn