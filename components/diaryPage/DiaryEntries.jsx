'use client'
import { Suspense, useEffect } from "react";
// context
import { useGlobalContext } from "@/app/context";
// custom hook
import useDiaryPagination from "@/hooks/useDiaryPagination";
//  component
import DiaryEntry from "./DiaryEntry";
import DiaryEntriesPagination from "./DiaryEntriesPagination";

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

    return (
        <div className="diary-page">
            {diaryEntries && diaryEntries.length > 0 ? (
                <>
                    <Suspense fallback={<p>Loading feed...</p>}>
                        {/* Display the current diary entry */}
                        {diaryEntries.map((entry) => (
                            <DiaryEntry key={entry.id} entry={entry} />

                        ))}
                        <DiaryEntriesPagination page={page} getDiaryEntries={getDiaryEntries} />

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