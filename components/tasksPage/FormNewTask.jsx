'use client'
import { useRef } from "react"
// context
import { useGlobalContext } from "@/app/context"
// lib - actions
import { addNewTaskAction } from "@/lib/actions"
// components
import FormInput from "../FormInput"

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
                        <FormInput label='New tasks' name='taskTitle' type='text' placeholder='Enter new task' required={true} maxLength={100} />

                        <input type="date" className="block" name="taskDate" id="taskDate" required />

                        <button type="submit" className="bg-orange-300 rounded-md px-5 py-2 mt-4 font-bold hover:bg-orange-400">
                            Add new task
                        </button>
                    </div>

                    <div>
                        <textarea className="block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="taskContent" id="" rows='7' required />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default FormNewTask