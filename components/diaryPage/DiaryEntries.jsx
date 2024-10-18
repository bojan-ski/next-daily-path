'use client'
import { useEffect, useState } from "react";
// context
import { useGlobalContext } from "@/app/context";
// custom hook
import useDiaryPagination from "@/hooks/useDiaryPagination";
//  component
import DiaryEntrySearchOption from "./DiaryEntrySearchOption";
import DiaryEntry from "./DiaryEntry";
import Pagination from "../Pagination";

const DiaryEntries = () => {
    const { userProfileDetails } = useGlobalContext()
    const { diaryEntries, getDiaryEntries, page } = useDiaryPagination(userProfileDetails.userID);

    useEffect(() => {
        console.log('useEffect - DiaryEntries');
        const getDiaryEntriesFromDB = async () => {
            if (userProfileDetails.userLoggedIn && userProfileDetails.userID) {
                console.log('useEffect - fetchTasks');
                await getDiaryEntries();
            }
        };

        getDiaryEntriesFromDB();
    }, [userProfileDetails.userID]);

    // search feature - state
    const [searchParam, setSearchParam] = useState('')

    return (
        <div className="diary-page">
            {/* search */}
            <DiaryEntrySearchOption getDiaryEntries={getDiaryEntries} searchParam={searchParam} setSearchParam={setSearchParam} />

            {diaryEntries && diaryEntries.length > 0 ? (
                <>
                    {/* Display the current diary entry */}
                    {diaryEntries.map((entry) => (
                        <DiaryEntry key={entry.id} entry={entry} />
                    ))}

                    {/* pagination */}
                    <Pagination page={page} getPageContentData={getDiaryEntries} />
                </>
            ) : (
                <h2 className='text-stone-950 text-3xl text-center font-bold'>
                    No diary entries found
                </h2>
            )}
        </div>
    );
}

export default DiaryEntries