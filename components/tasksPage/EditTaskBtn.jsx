import { useState } from "react";
// lib - actions
import { updateTaskDataAction } from "@/lib/actions/taskActions";
// components
import EditTaskModal from "./EditTaskModal";
// icon
import { FaEdit } from "react-icons/fa";

const EditTaskBtn = ({ userID, taskID, task }) => {
    const [toggleModal, setToggleModal] = useState(false)
    const updateTaskData = updateTaskDataAction.bind(null, userID, taskID)

    return (
        <>
            <button className='btn btn-sm me-3' onClick={() => setToggleModal(true)} >
                <FaEdit size={17} />
            </button>

            <EditTaskModal updateTaskData={updateTaskData} toggleModal={toggleModal} setToggleModal={setToggleModal} taskID={taskID} task={task} />
        </>
    )
}

export default EditTaskBtn