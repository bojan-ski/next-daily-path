'use client'
import { useState } from 'react';
// context
import { useGlobalContext } from '@/app/context';
// lib
import { addNewDiaryEntryAction } from '@/lib/actions/diaryActions';
// components
import FormCustomization from './FormCustomization';
import FormNewDiaryEntry from './FormNewDiaryEntry';


const DiaryEntriesContainer = () => {
    const { userProfileDetails } = useGlobalContext();

    const [customEntry, setCustomEntry] = useState({
        imageOne: false,
        entryContentTwo: false,
        imageTwo: false,
    })

    const addNewDiaryEntryData = addNewDiaryEntryAction.bind(null, userProfileDetails?.userID, userProfileDetails?.userUsername);

    return (
        <>
            <FormCustomization setCustomEntry={setCustomEntry} />
            <FormNewDiaryEntry customEntry={customEntry} addNewDiaryEntryData={addNewDiaryEntryData} />
        </>
    )
}

export default DiaryEntriesContainer