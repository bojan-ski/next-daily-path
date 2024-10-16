'use client'
import { useState } from 'react'
// components
import FormCustomization from './FormCustomization'
import FormNewDiaryEntry from './FormNewDiaryEntry'

const DiaryEntriesContainer = () => {
    const [customEntry, setCustomEntry] = useState({
        imageOne: false,
        entryContentTwo: false,
        imageTwo: false,
    })

    return (
        <>
            <FormCustomization setCustomEntry={setCustomEntry} />
            <FormNewDiaryEntry customEntry={customEntry}/>
        </>
    )
}

export default DiaryEntriesContainer