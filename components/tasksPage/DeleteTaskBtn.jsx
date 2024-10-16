// lib - actions
import { deleteTaskAction } from "@/lib/actions/taskActions"

const DeleteTaskBtn = ({ userID, taskID, getTasksList }) => {
    const handleDeleteTask = async () => {
        const response = await deleteTaskAction(userID, taskID)
        if (response) {
            getTasksList()
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