'use server'
// firebase/firestore funcs
import { addDoc,collection, doc, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/firebase.config";
// utils 
import getCurrentTimeAndDate from "@/utils/getCurrentTimeAndDate";
// lib
import storeUploadedImage from "../firebase/storeUploadedImage";

// CREATE/ADD NEW DIARY ENTRY
export const addNewDiaryEntryAction = async (userID, userUsername, formData) => {
    const newDiaryEntryTitle = formData.get('newDiaryEntryTitle').trim()
    const newDiaryEntryContentOne = formData.get('newDiaryEntryContentOne').trim()
    const newDiaryEntryContentTwo = formData?.get('newDiaryEntryContentTwo').trim() || null  
    const newDiaryEntryImgOne = formData?.get('newDiaryEntryImgOne')
    const newDiaryEntryImgTwo = formData?.get('newDiaryEntryImgTwo')

    let diaryEntryImgOneUrl;
    let diaryEntryImgTwoUrl;    

    if (newDiaryEntryImgOne.name != 'undefined' && newDiaryEntryImgOne.size < 1000000) {
        try {
            diaryEntryImgOneUrl = await storeUploadedImage('diaryImages', newDiaryEntryImgOne, newDiaryEntryTitle, userUsername)
        } catch (error) {
            // error message
            console.log('Error image - one', error)
        }
    }

    if (newDiaryEntryImgTwo.name != 'undefined' && newDiaryEntryImgTwo.size < 1000000) {
        try {
            diaryEntryImgTwoUrl = await storeUploadedImage('diaryImages', newDiaryEntryImgTwo, newDiaryEntryTitle, userUsername)
        } catch (error) {
            // error message
            console.log('Error image - two', error)
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
    // console.log(response);

    if (response) {
        // success message
        console.log('New diary entry - all good')
    }
}

const postNewDiaryEntry = async (userID, newDiaryEntryData) => {
    try {

        const userDocRef = doc(db, `users/${userID}`);

        // Reference to the tasks subcollection
        const diaryCollectionRef = collection(userDocRef, 'diary');

        // Add a new document to the tasks subcollection
        await addDoc(diaryCollectionRef, newDiaryEntryData);

        return true
    } catch (error) {
        // error message
        console.error(error);

        return false
    }
}


