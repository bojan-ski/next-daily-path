'use server'
import { revalidatePath } from "next/cache";
// firebase/firestore funcs
import { addDoc, doc, collection, serverTimestamp, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/firebase.config";
// utils 
import getCurrentTimeAndDate from "@/utils/getCurrentTimeAndDate";
// toast
import toast from "react-hot-toast";

// CREATE/ADD NEW TASK
export const addNewTaskAction = async (userID, formData) => {
    const taskTitle = formData.get('taskTitle').trim()
    const taskContent = formData.get('taskContent').trim()
    const taskDate = formData.get('taskDate').trim()

    try {
        const newTaskData = {
            userRef: userID,
            isCompleted: false,
            taskTitle: taskTitle,
            taskContent: taskContent,
            taskDate: taskDate,
            taskCreated: getCurrentTimeAndDate(),
            timestamp: serverTimestamp()
        }

        const userDocRef = doc(db, `users/${userID}`);

        // Reference to the tasks subcollection
        const tasksCollectionRef = collection(userDocRef, 'tasks');

        // Add a new document to the tasks subcollection
        await addDoc(tasksCollectionRef, newTaskData);

        //revalidate page
        revalidatePath('/tasks')

        return true        
    } catch (error) { 
        // error message
        toast.error('There was an error while creating new task')

        return false
    }
}

// UPDATE EXISTING TASKS DATA
export const updateTaskDataAction = async (userID, taskID, formData) => {
    const updatedTaskTitle = formData.get('taskTitle').trim()
    const updatedTaskContent = formData.get('taskContent').trim()
    const updatedTaskDate = formData.get('taskDate').trim()

    try {
        const taskDocRef = doc(db, `users/${userID}/tasks/${taskID}`);

        await updateDoc(taskDocRef, {
            taskTitle: updatedTaskTitle,
            taskContent: updatedTaskContent,
            taskDate: updatedTaskDate,
        });

        //revalidate page
        revalidatePath('/tasks')

        let updatedTask = {
            taskTitle: updatedTaskTitle,
            taskContent: updatedTaskContent,
            taskDate: updatedTaskDate,
        }
        
        return updatedTask
    } catch (error) {
        // error message
        toast.error('There was an error while updating task')

        return false
    }
}

// UPDATE/SET EXISTING TASKS AS COMPLETED
export const updateIsTaskCompletedAction = async (userID, taskID, formData) => {
    try {
        // Reference to the specific document (task) to update
        const taskDocRef = doc(db, `users/${userID}/tasks/${taskID}`);

        // Update the document with the new data
        await updateDoc(taskDocRef, { isCompleted: formData });

        //revalidate page
        revalidatePath('/tasks')

        return true
    } catch (error) {
        // error message
        toast.error('There was an error while setting task as completed')

        return false
    }
};

// DELETE TASK
export const deleteTaskAction = async (userID, taskID) => {
    try {
        // Reference to the specific document (task) for delete
        const taskDocRef = doc(db, `users/${userID}/tasks/${taskID}`);

        // Delete the document
        await deleteDoc(taskDocRef);

        //revalidate page
        revalidatePath('/tasks')

        return true
    } catch (error) {
        // error message
        toast.error('There was an error while deleting task')
        
        return false
    }
}