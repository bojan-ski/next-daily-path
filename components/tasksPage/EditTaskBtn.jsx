import { useState } from "react";
// lib - actions
import { updateTaskDataAction } from "@/lib/actions/taskActions";
// components
import EditTaskModal from "./EditTaskModal";

const EditTaskBtn = ({ userID, taskID, task, getTasksList }) => {
    const [toggleModal, setToggleModal] = useState(false)
    const updateTaskData = updateTaskDataAction.bind(null, userID, taskID)

    return (
        <>
            <button className='btn btn-sm btn-warning me-3' onClick={() => setToggleModal(true)} >
                Edit
            </button>

            <EditTaskModal updateTaskData={updateTaskData} toggleModal={toggleModal} setToggleModal={setToggleModal} task={task} getTasksList={getTasksList} />
        </>
    )
}

export default EditTaskBtn