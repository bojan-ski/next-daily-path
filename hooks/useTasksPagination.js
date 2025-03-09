import { useState } from "react";
// firebase func
import { collection, query, orderBy, startAfter, limit, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase.config";
// toast
import toast from "react-hot-toast";


const useTasksPagination = (userID, itemsPerPage) => {
    const [tasks, setTasks] = useState([]);
    const [pageSnapshots, setPageSnapshots] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const getTasksList = async (pageNumber = 0, reset = false) => {
        setIsLoading(true);

        let updatedSnapshots = pageSnapshots;

        try {
            const baseQuery = [
                collection(db, `users/${userID}/tasks`),
                orderBy('timestamp', 'desc'),
                limit(itemsPerPage),
            ];

            let q;

            if (reset || pageNumber === 0) {
                // Fetch the first page or reset to the first page
                q = query(...baseQuery);

                updatedSnapshots = [];
                setPageSnapshots(updatedSnapshots);
            } else if (pageNumber > page) {
                // Moving forward, use the last snapshot of the current page              
                let lastVisible = updatedSnapshots[updatedSnapshots.length - 1];

                q = query(...baseQuery, startAfter(lastVisible));
            } else if (pageNumber < page) {
                // Moving back, use the snapshot of the previous page
                let previousPageSnapshot = updatedSnapshots[pageNumber - 1];

                q = query(...baseQuery, startAfter(previousPageSnapshot));
            }

            const querySnapshot = await getDocs(q);

            // Check if the end of the collection is reached
            if (querySnapshot.docs.length == 0 && pageNumber !== 0) {
                // Loop back to the first page
                updatedSnapshots = [];
                setPageSnapshots(updatedSnapshots);

                getTasksList(0, true);
                return;
            }

            // Update the last visible document for the next page
            const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
            updatedSnapshots = reset
                ? [newLastVisible]
                : [...updatedSnapshots, newLastVisible];
            setPageSnapshots(updatedSnapshots);

            // Replace the listings with the new set of documents for the current page
            setTasks(querySnapshot.docs.map(doc => ({
                docID: doc.id,
                taskData: doc.data()
            })));
            setPage(pageNumber);
        } catch (error) {
            //error message
            toast.error('There was an error fetching Tasks content');
        }

        setIsLoading(false);
    };

    return { tasks, setTasks, getTasksList, page, isLoading };
}

export default useTasksPagination