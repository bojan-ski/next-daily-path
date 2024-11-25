'use server'
import { redirect } from "next/navigation";
// firebase/firestore funcs
import { addDoc,collection, doc, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/firebase.config";
// utils 
import getCurrentTimeAndDate from "@/utils/getCurrentTimeAndDate";
// lib
import storeUploadedImage from "../firebase/storeUploadedImage";
// toast
import toast from "react-hot-toast";

// CREATE/ADD NEW DIARY ENTRY
export const addNewDiaryEntryAction = async (userID, userUsername, formData) => {   
    const newDiaryEntryTitle = formData.get('newDiaryEntryTitle').trim()
    const newDiaryEntryContentOne = formData.get('newDiaryEntryContentOne').trim()
    const newDiaryEntryContentTwo = formData.get('newDiaryEntryContentTwo') ? formData.get('newDiaryEntryContentTwo').trim() : null  
    const newDiaryEntryImgOne = formData.get('newDiaryEntryImgOne') ? formData.get('newDiaryEntryImgOne') : null
    const newDiaryEntryImgTwo = formData.get('newDiaryEntryImgTwo') ? formData.get('newDiaryEntryImgTwo') : null

    let diaryEntryImgOneUrl;
    let diaryEntryImgTwoUrl;    

    if (newDiaryEntryImgOne && newDiaryEntryImgOne.name != 'undefined' && newDiaryEntryImgOne.size < 1000000) {
        try {
            diaryEntryImgOneUrl = await storeUploadedImage('diaryImages', newDiaryEntryImgOne, newDiaryEntryTitle, userUsername)
        } catch (error) {
            // error message 
            toast.error('There was an error with image - one') 
        }
    }

    if (newDiaryEntryImgTwo && newDiaryEntryImgTwo.name != 'undefined' && newDiaryEntryImgTwo.size < 1000000) {
        try {
            diaryEntryImgTwoUrl = await storeUploadedImage('diaryImages', newDiaryEntryImgTwo, newDiaryEntryTitle, userUsername)
        } catch (error) {
            // error message
            toast.error('There was an error with image - two')
        }
    }

    const newDiaryEntryData = {
        newDiaryEntryTitle,
        newDiaryEntryContentOne,
        newDiaryEntryContentTwo: newDiaryEntryContentTwo ? newDiaryEntryContentTwo : null,
        diaryEntryImgOneUrl: diaryEntryImgOneUrl ? diaryEntryImgOneUrl : null,
        diaryEntryImgTwoUrl: diaryEntryImgTwoUrl ? diaryEntryImgTwoUrl : null,
        listingCreated: getCurrentTimeAndDate(),
        timestamp: serverTimestamp()
    } 

    const response = await postNewDiaryEntry(userID, newDiaryEntryData)    

    if (response) {
        // success message
        toast.success('New diary entry created')
        
        // redirect user
        redirect('/diary')
    }
}

const postNewDiaryEntry = async (userID, newDiaryEntryData) => {
    try {

        const userDocRef = doc(db, `users/${userID}`);

        // Reference to the diary subcollection
        const diaryCollectionRef = collection(userDocRef, 'diary');

        // Add a new document to the diary subcollection
        await addDoc(diaryCollectionRef, newDiaryEntryData);

        return true
    } catch (error) {
        // error message
        toast.error('There was an error creating a new Diary entry')

        return false
    }
}