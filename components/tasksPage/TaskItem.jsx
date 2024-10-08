import { useState } from "react"
// context
import { useGlobalContext } from "@/app/context"

import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase.config";

const TaskItem = ({ task, onPageUpdate }) => {
    const { userProfileDetails } = useGlobalContext()
    const taskID = task.docID
    const userID = userProfileDetails.userID
    const [isTaskCompleted, setIsTaskCompleted] = useState(task.taskData.isCompleted)

    const updateTask = async (userID, taskID, isTaskCompleted) => {
        try {
            // Reference to the specific document (task) to update
            const taskDocRef = doc(db, `users/${userID}/tasks/${taskID}`);

            // Update the document with the new data
            await updateDoc(taskDocRef, { isCompleted: isTaskCompleted });

            // success message
            console.log("task updated successfully!");

            // update/refresh component -> tasks list
            onPageUpdate()
        } catch (error) {
            // error message
            console.error("Error updating document: ", error);
        }
    };

    return (
        <div className={`collapse collapse-arrow my-3 ${task.taskData.isCompleted == false ? "bg-red-500" : 'bg-green-500'}`}>
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium flex justify-between">
                <h2 className='capitalize'>
                    {task.taskData.taskTitle}
                </h2>
                <p>
                    Do date: {task.taskData.taskDate}
                </p>
            </div>
            <div className="collapse-content">
                <p className='mb-3'>
                    {task.taskData.taskContent}
                </p>

                <div className="task-options flex justify-between">
                    <div>
                        <button className='btn btn-sm btn-warning me-3'>
                            Edit
                        </button>
                        <button className='btn btn-sm btn-error'>
                            Delete
                        </button>
                    </div>

                    <div className="relative flex gap-x-3 items-center">
                        <input
                            className="h-4 w-4 rounded"
                            type="checkbox"
                            checked={isTaskCompleted}
                            onChange={(e) => {
                                const taskStatus = e.target.checked;
                                setIsTaskCompleted(taskStatus);
                                updateTask(userID, taskID, taskStatus);
                            }}
                        />
                        <p>
                            Task completed
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskItem