// context
import { useGlobalContext } from "@/app/context"
// lib - actions
import { updateIsTaskCompletedAction } from "@/lib/actions/taskActions";
// components
import EditTaskBtn from "./EditTaskBtn";
import DeleteTaskBtn from "./DeleteTaskBtn";
// toast
import toast from "react-hot-toast";

const Task = ({ task }) => {
    const { userProfileDetails, setTasks } = useGlobalContext()
    const userID = userProfileDetails?.userID
    const taskID = task?.docID

    const updateTaskData = updateIsTaskCompletedAction.bind(null, userID, taskID)

    const handleChange = async e => {
        const taskStatus = e.target.checked;

        try {
            const response = await updateTaskData(taskStatus)

            if (response) {
                setTasks(prevState =>
                    prevState.map(item =>
                        item.docID === taskID ? {
                            ...item,
                            taskData: {
                                ...item.taskData,
                                isCompleted: taskStatus,
                            }
                        } : item)
                );

                // success message
                toast.success("Task updated successfully!");
            }
        } catch (error) {
            // error message
            toast.error('There was an error while setting task as completed')
        }
    }

    return (
        <div className={`collapse collapse-arrow my-3 ${task?.taskData?.isCompleted == false ? "bg-red-500" : 'bg-green-500'}`}>
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium flex justify-between">
                <h2 className='capitalize'>
                    {task?.taskData?.taskTitle}
                </h2>
                <p className="text-lg">
                    Do date: {task?.taskData?.taskDate}
                </p>
            </div>
            <div className="collapse-content">
                <p className='mb-3'>
                    {task?.taskData?.taskContent}
                </p>

                <div className="task-options flex justify-between">
                    <div className="relative flex gap-x-3 items-center">
                        <input
                            className="h-4 w-4 rounded"
                            type="checkbox"
                            checked={task?.taskData?.isCompleted}
                            onChange={handleChange}
                        />
                        <p>
                            Task completed
                        </p>
                    </div>

                    {task?.taskData?.isCompleted == false && (
                        <div>
                            <EditTaskBtn userID={userID} taskID={taskID} task={task} />
                            <DeleteTaskBtn userID={userID} taskID={taskID} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Task