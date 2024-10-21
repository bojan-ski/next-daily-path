import { useState } from "react";
// firebase funcs
import { collection, query, orderBy, startAfter, limit, getDocs, where } from "firebase/firestore";
import { db } from "@/app/firebase.config";
import toast from "react-hot-toast";

const useDiaryPagination = (userID) => {
    const itemsPerPage = 1
    const [diaryEntries, setDiaryEntries] = useState([]);
    const [lastVisible, setLastVisible] = useState(null);
    const [page, setPage] = useState(0);

    const getDiaryEntries = async (pageNumber = 0, searchTerm = '', reset = false) => {        
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
                // Reset the last and first visible documents
                setLastVisible(null);
            } else {
                // Fetch the next set based on the last visible document
                if (lastVisible) {
                    q = query(
                        ...queryParams,
                        startAfter(lastVisible)
                    );
                }
            }

            const querySnapshot = await getDocs(q);

            // Check if the end of the collection is reached
            if (querySnapshot.docs.length === 0 && pageNumber !== 0) {
                // Loop back to the first page
                getDiaryEntries(0, true);
                return;
            }

            // Update the last visible document for the next page
            const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
            setLastVisible(newLastVisible);

            // Replace the entries with the new set of documents for the current page
            setDiaryEntries(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })));
            setPage(pageNumber);
        } catch (error) {
            // error message
            toast.error('There was an error fetching Diary content')
            // console.log("Error fetching diary entries:", error);
        }
    };

    return { diaryEntries, getDiaryEntries, page };
};

export default useDiaryPagination;
