// lib - actions
import { deleteTaskAction } from "@/lib/actions/taskActions"
// icon
import { MdDelete } from "react-icons/md";

const DeleteTaskBtn = ({ userID, taskID, getTasksList }) => {
    const handleDeleteTask = async () => {
        const response = await deleteTaskAction(userID, taskID)
        if (response) {
            getTasksList()
            console.log('Selected task has been removed')
        }
    }

    return (
        <button className='btn btn-sm' onClick={handleDeleteTask}>
            <MdDelete size={17} />
        </button>
    )
}

export default DeleteTaskBtn