import { useState } from "react";
// lib - actions
import { updateTaskAction } from "@/lib/actions";

const EditTaskBtn = ({ userID, taskID, task, fetchTasks }) => {
    const [toggleModal, setToggleModal] = useState(false)
    const updateTaskData = updateTaskAction.bind(null, userID, taskID)

    return (
        <>
            <button className='btn btn-sm btn-warning me-3' onClick={() => setToggleModal(true)}>
                Edit
            </button>

            <div className="custom-modal" style={{ display: toggleModal ? 'block' : 'none' }}>
                <div class="modal-content">

                    <form action={async (formData) => {
                        updateTaskData(formData)
                        setToggleModal(false)
                        fetchTasks()
                    }} method="dialog">
                        <input type="text" name='taskTitle' defaultValue={task.taskData.taskTitle} />

                        <input type="date" name="taskDate" defaultValue={task.taskData.taskDate} />

                        <textarea className="" name="taskContent" rows='7' defaultValue={task.taskData.taskContent} />

                        <button type="submit" className="bg-orange-300 btn rounded-md px-5 py-2 mt-4 font-bold hover:bg-orange-400">
                            Update task
                        </button>
                    </form>

                    <div className="modal-desc">
                        <span class="close" onClick={() => setToggleModal(false)}>
                            x
                        </span>
                    </div>
                </div>
            </div>







            {/* <button className='btn btn-sm btn-warning me-3' onClick={() => document.getElementById('my_modal_1').showModal()}>
                Edit
            </button>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form action={updateTaskData} method="dialog">
                        <input type="text" name='taskTitle' defaultValue={task.taskData.taskTitle} />

                        <input type="date" name="taskDate" defaultValue={task.taskData.taskDate} />

                        <textarea className="" name="taskContent" rows='7' defaultValue={task.taskData.taskContent} />

                        <button type="submit" className="bg-orange-300 btn rounded-md px-5 py-2 mt-4 font-bold hover:bg-orange-400">
                            Update task
                        </button>
                    </form>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog> */}
        </>
    )
}

export default EditTaskBtn