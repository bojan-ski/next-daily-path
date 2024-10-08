'use server'
// firebase/firestore funcs
import { addDoc, doc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/firebase.config";
import { auth } from "@/app/firebase.config";
// utils 
import getCurrentTimeAndDate from "@/utils/getCurrentTimeAndDate";

export const addNewTaskAction = async (userID, formData) => {
    const taskTitle = formData.get('taskTitle').trim()
    const taskContent = formData.get('taskContent').trim()
    const taskDate = formData.get('taskDate').trim()
    // console.log(taskTitle);
    // console.log(taskContent);
    // console.log(userID);    
    // console.log(auth?.currentUser?.uid);      

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
        // const apiCall = await addDoc(tasksCollectionRef, newTaskData);
        // console.log(apiCall);
        
        // success message
        console.log('new tasks created')
    } catch (error) {
        console.log(error);
    }
}