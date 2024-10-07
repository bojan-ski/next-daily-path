import { NextResponse } from "next/server";
// firebase/firestore funcs
import { collection, doc, getDocs } from "firebase/firestore"
import { db } from "@/app/firebase.config";

export const GET = async (request) => {
    const userID = request.headers.get('Authorization')?.replace('Bearer ', '');

    if (!userID) return NextResponse.json({ error: 'UserID is required' });

    try {
        const userDocRef = doc(db, `users/${userID}`);

        const tasksCollectionRef = collection(userDocRef, 'tasks');

        const querySnapshot = await getDocs(tasksCollectionRef);

        // Extract data from each document
        const tasksList = querySnapshot.docs.map(doc => ({
            docID: doc.id,
            taskData: doc.data()
        }));

        // console.log(tasksList);       
        return NextResponse.json(tasksList)
    } catch (error) {
        // error message
        console.log(error);

        return NextResponse.json({ error: 'Failed to fetch tasks' });
    }
}