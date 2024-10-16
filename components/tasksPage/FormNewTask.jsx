'use client'
import { useRef } from "react"
// lib - actions
import { addNewTaskAction } from "@/lib/actions/taskActions"
// components
import FormInput from "../FormInput"
import FormTextArea from "../FormTextArea"
import FormSubmitBtn from "../FormSubmitBtn"

const FormNewTask = ({ userID, getTasksList }) => {
    const ref = useRef(null)

    const addNewTaskData = addNewTaskAction.bind(null, userID)

    const createTaskAction = async (formData) => {
        const response = await addNewTaskData(formData)
        if (response) {
            ref.current?.reset()
            getTasksList()
            console.log('new tasks created')
        }
    }

    return (
        <section className='new-task-form bg-orange-100 py-5 px-10 mb-10 w-3/4 mx-auto rounded-xl'>
            <form ref={ref} action={createTaskAction}>
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <FormInput label='New tasks' name='taskTitle' type='text' placeholder='Enter new task' required={true} maxLength={50} />

                        <FormInput label='Do date:' name='taskDate' type='date' required={true} />

                        <FormSubmitBtn btnTitle='Add new task' />
                    </div>

                    <div>
                        <FormTextArea name='taskContent' rows={7} minLength={10} maxLength={350} required={true} />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default FormNewTask