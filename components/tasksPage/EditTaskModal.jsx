// components
import FormInput from "../FormInput"
import FormSubmitBtn from "../FormSubmitBtn"
import FormTextArea from "../FormTextArea"

const EditTaskModal = ({ updateTaskData, toggleModal, setToggleModal, task, fetchTasks }) => {
    const updateTaskAction = async (formData) =>{
        const response = await updateTaskData(formData)
        if(response){
            setToggleModal(false)
            await fetchTasks()
            console.log("task updated successfully!");
        }        
    }

    return (
        <div className="custom-modal" style={{ display: toggleModal ? 'block' : 'none' }}>
            <div className="modal-content">

                <form action={updateTaskAction}>
                    <FormInput label='New tasks' name='taskTitle' type='text' placeholder='Enter new task'  maxLength={50} defaultValue={task.taskData.taskTitle} required={true}/>

                    <FormInput label='Do date:' name='taskDate' type='date' defaultValue={task.taskData.taskDate} required={true} />

                    <FormTextArea name='taskContent' rows={7} minLength={10} maxLength={350} defaultValue={task.taskData.taskContent} required={true}/>

                    <FormSubmitBtn btnTitle='Update task' />
                </form>

                <div className="modal-esc">
                    <span className="close" onClick={() => setToggleModal(false)}>
                        x
                    </span>
                </div>
            </div>
        </div>
    )
}

export default EditTaskModal