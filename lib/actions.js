'use server'
// firebase/firestore funcs
import { addDoc, doc, collection, serverTimestamp, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/firebase.config";
// utils 
import getCurrentTimeAndDate from "@/utils/getCurrentTimeAndDate";

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

        // success message
        console.log('new tasks created')
    } catch (error) {
        console.log(error);
    }
}

// UPDATE EXISTING TASKS DATA
export const updateTaskAction = async (userID, taskID, formData) => {
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

        // success message
        console.log("task updated successfully!");
    } catch (error) {
        // error message
        console.error("Error updating document: ", error);
    }
}

// UPDATE EXISTING TASKS IS COMPLETED
export const updateIsTaskCompleted = async (userID, taskID, formData) => {
    try {
        // Reference to the specific document (task) to update
        const taskDocRef = doc(db, `users/${userID}/tasks/${taskID}`);

        // Update the document with the new data
        await updateDoc(taskDocRef, { isCompleted: formData });

        // success message
        console.log("task updated successfully!");
    } catch (error) {
        // error message
        console.error("Error updating document: ", error);
    }    
};

// DELETE TASK
export const deleteTask = async (userID, taskID) => {    
    try {
        // Reference to the specific document (task) for delete
        const taskDocRef = doc(db, `users/${userID}/tasks/${taskID}`);

        // Delete the document
        await deleteDoc(taskDocRef);

        // success message
        console.log('Selected task has been removed')
    } catch (error) {
        console.error(error);
    }
}