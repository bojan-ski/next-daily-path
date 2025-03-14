'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// context
import { useGlobalContext } from "@/app/context";
// custom hook
import useDiaryPagination from "@/hooks/useDiaryPagination";
//  component
import DiaryEntrySearchOption from "./DiaryEntrySearchOption";
import DiaryEntry from "./DiaryEntry";
import Pagination from "../Pagination";
// toast
import toast from "react-hot-toast";


const DiaryEntries = () => {
    const router = useRouter();
    const { userProfileDetails } = useGlobalContext();

    // Redirect if user is not logged in
    useEffect(() => {
        if (!userProfileDetails?.userLoggedIn) {
            toast.error('You need to have an account in order to access the Diary page');
            router.push('/');
        }
    }, [userProfileDetails.userLoggedIn, router]);

    const { diaryEntries, getDiaryEntries, page, isLoading } = useDiaryPagination(userProfileDetails.userID);

    // fetch page content
    useEffect(() => {
        const getDiaryEntriesFromDB = async () => {
            if ((userProfileDetails?.userLoggedIn && userProfileDetails?.userID) && diaryEntries.length == 0) await getDiaryEntries();
        };

        getDiaryEntriesFromDB();
    }, [userProfileDetails.userID]);  

    // search feature - state
    const [searchParam, setSearchParam] = useState('');

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
                    <Pagination page={page} getPageContentData={getDiaryEntries} isLoading={isLoading}/>
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