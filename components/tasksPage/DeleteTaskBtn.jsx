// lib - actions
import { deleteTaskAction } from "@/lib/actions/taskActions"

const DeleteTaskBtn = ({ userID, taskID, tasks, setTasks }) => {
    const handleDeleteTask = async () => {
        const response = await deleteTaskAction(userID, taskID)
        if (response) {
            const updatedTasksList = tasks.filter(task => task.docID !== taskID)
            setTasks(updatedTasksList)
            console.log('Selected task has been removed')
        }
    }

    return (
        <button className='btn btn-sm btn-error' onClick={handleDeleteTask}>
            Delete
        </button>
    )
}

export default DeleteTaskBtn