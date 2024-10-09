'use client'
import { useRef } from "react"
// context
import { useGlobalContext } from "@/app/context"
// lib - actions
import { addNewTaskAction } from "@/lib/actions"
// components
import FormInput from "../FormInput"
import FormTextArea from "../FormTextArea"
import FormSubmitBtn from "../FormSubmitBtn"

const FormNewTask = () => {
    const ref = useRef(null)
    const { userProfileDetails, fetchTasks } = useGlobalContext() 
    const addNewTaskData = addNewTaskAction.bind(null, userProfileDetails.userID)

    return (
        <section className='new-task-form bg-orange-100 py-5 px-10 mb-10 w-3/4 mx-auto rounded-xl'>
            <form ref={ref} action={async (formData) => {
                await addNewTaskData(formData)
                ref.current?.reset()
                fetchTasks()
            }}>
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <FormInput label='New tasks' name='taskTitle' type='text' placeholder='Enter new task' required={true} maxLength={50} />

                        <FormInput label='Do date:' name='taskDate' type='date' required={true} />

                        <FormSubmitBtn btnTitle='Add new task'/>
                    </div>

                    <div>
                        <FormTextArea name='taskContent' rows={7} minLength={10} maxLength={350} required={true}/>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default FormNewTask