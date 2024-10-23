// context 
import { useGlobalContext } from "@/app/context";
// lib - actions
import { deleteTaskAction } from "@/lib/actions/taskActions"
// icon
import { MdDelete } from "react-icons/md";
// toast
import toast from "react-hot-toast";

const DeleteTaskBtn = ({ userID, taskID }) => {
    const { tasks, setTasks } = useGlobalContext()

    const handleDeleteTask = async () => {
        if (window.confirm('Are you sure you want to delete task')) {
            const response = await deleteTaskAction(userID, taskID)
            
            if (response) {
                const updatedTasksList = tasks.filter(task => task.docID !== taskID)
                setTasks(updatedTasksList)

                // success message
                toast.success('Selected task has been removed')
            }
        }
    }

    return (
        <button className='btn btn-sm' onClick={handleDeleteTask}>
            <MdDelete size={17} />
        </button>
    )
}

export default DeleteTaskBtn