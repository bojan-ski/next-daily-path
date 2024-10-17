'use client'
import { Suspense, useEffect, useState } from "react";
// context
import { useGlobalContext } from "@/app/context";
// custom hook
import useDiaryPagination from "@/hooks/useDiaryPagination";
//  component
import DiaryEntrySearchOption from "./DiaryEntrySearchOption";
import DiaryEntry from "./DiaryEntry";
import Pagination from "../Pagination";
// loading
import Loading from "@/app/loading";

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
            {diaryEntries && diaryEntries.length > 0 ? (
                <>
                    <Suspense fallback={<Loading />}>
                        {/* search */}
                        <DiaryEntrySearchOption getDiaryEntries={getDiaryEntries} searchParam={searchParam} setSearchParam={setSearchParam} />

                        {/* Display the current diary entry */}
                        {diaryEntries.map((entry) => (
                            <DiaryEntry key={entry.id} entry={entry} />

                        ))}

                        {/* pagination */}
                        <Pagination page={page} getPageContentData={getDiaryEntries} />
                    </Suspense>
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