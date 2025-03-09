import { useState } from "react";
// firebase funcs
import { collection, query, orderBy, startAfter, limit, getDocs, where } from "firebase/firestore";
import { db } from "@/app/firebase.config";
import toast from "react-hot-toast";


const useDiaryPagination = (userID) => {
    const itemsPerPage = 1;
    const [diaryEntries, setDiaryEntries] = useState([]);
    const [pageSnapshots, setPageSnapshots] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const getDiaryEntries = async (pageNumber = 0, searchTerm = '', reset = false) => {
        setIsLoading(true);

        let updatedSnapshots = pageSnapshots;

        try {
            let queryParams = [
                collection(db, `users/${userID}/diary`),
                orderBy('timestamp', 'desc'),
                limit(itemsPerPage)
            ]

            if (searchTerm && searchTerm.length > 0) {
                queryParams.push(where('newDiaryEntryTitle', '==', searchTerm));
            }

            let q;

            if (reset || pageNumber === 0) {
                // Fetch the first page or reset to the first page
                q = query(
                    ...queryParams
                );

                updatedSnapshots = [];
                setPageSnapshots(updatedSnapshots);
            } else if (pageNumber > page) {
                // Moving forward, use the last snapshot of the current page              
                let lastVisible = updatedSnapshots[updatedSnapshots.length - 1];

                q = query(...queryParams, startAfter(lastVisible));
            } else if (pageNumber < page) {
                // Moving back, use the snapshot of the previous page
                let previousPageSnapshot = updatedSnapshots[pageNumber - 1];

                q = query(...queryParams, startAfter(previousPageSnapshot));
            }

            const querySnapshot = await getDocs(q);

            // Check if the end of the collection is reached
            if (querySnapshot.docs.length === 0 && pageNumber !== 0) {
                // Loop back to the first page
                updatedSnapshots = [];
                setPageSnapshots(updatedSnapshots);

                getDiaryEntries(0, true);
                return;
            }

            // Update the last visible document for the next page
            const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
            updatedSnapshots = reset
                ? [newLastVisible]
                : [...updatedSnapshots, newLastVisible];
            setPageSnapshots(updatedSnapshots);

            // Replace the entries with the new set of documents for the current page
            setDiaryEntries(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })));
            setPage(pageNumber);
        } catch (error) {
            // error message
            toast.error('There was an error fetching Diary pages');
        }

        setIsLoading(false);
    };

    return { diaryEntries, getDiaryEntries, page, isLoading };
};

export default useDiaryPagination;
