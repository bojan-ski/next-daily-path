// context
import { useGlobalContext } from "@/app/context"
// lib - actions
import { updateIsTaskCompletedAction } from "@/lib/actions/taskActions";
// components
import EditTaskBtn from "./EditTaskBtn";
import DeleteTaskBtn from "./DeleteTaskBtn";

const Task = ({ userProfileDetails, task, getTasksList }) => {
    const userID = userProfileDetails.userID
    const taskID = task.docID

    const updateTaskData = updateIsTaskCompletedAction.bind(null, userID, taskID)

    return (
        <div className={`collapse collapse-arrow my-3 ${task.taskData.isCompleted == false ? "bg-red-500" : 'bg-green-500'}`}>
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium flex justify-between">
                <h2 className='capitalize'>
                    {task.taskData.taskTitle}
                </h2>
                <p className="text-lg">
                    Do date: {task.taskData.taskDate}
                </p>
            </div>
            <div className="collapse-content">
                <p className='mb-3'>
                    {task.taskData.taskContent}
                </p>

                <div className="task-options flex justify-between">
                    <div className="relative flex gap-x-3 items-center">
                        <input
                            className="h-4 w-4 rounded"
                            type="checkbox"
                            checked={task.taskData.isCompleted}
                            onChange={async (e) => {
                                const taskStatus = e.target.checked;
                                await updateTaskData(taskStatus)
                                await getTasksList()
                            }}
                        />
                        <p>
                            Task completed
                        </p>
                    </div>

                    {task.taskData.isCompleted == false && (
                        <div>
                            <EditTaskBtn userID={userID} taskID={taskID} task={task} getTasksList={getTasksList} />
                            <DeleteTaskBtn userID={userID} taskID={taskID} getTasksList={getTasksList} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Task