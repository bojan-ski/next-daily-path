import { useState } from "react";
// firebase func
import { collection, query, orderBy, startAfter, limit, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase.config";

const useTasksPagination = (userID, itemsPerPage) => {
    const [tasks, setTasks] = useState([]);
    const [lastVisible, setLastVisible] = useState(null);
    const [page, setPage] = useState(0);

    const getTasksList = async (pageNumber = 0, reset = false) => {
        try {
            let q;

            if (reset || pageNumber === 0) {
                // Fetch the first page or reset to the first page
                q = query(
                    collection(db, `users/${userID}/tasks`),
                    orderBy('timestamp', 'desc'),
                    limit(itemsPerPage)
                );

                // Reset the last visible document when looping back
                setLastVisible(null);
            } else {
                // Fetch the next set based on the last visible document
                if (lastVisible) {
                    q = query(
                        collection(db, `users/${userID}/tasks`),
                        orderBy('timestamp', 'desc'),
                        limit(itemsPerPage),
                        startAfter(lastVisible),
                    );
                }
            }

            const querySnapshot = await getDocs(q);

            // Check if the end of the collection is reached
            if (querySnapshot.docs.length == 0 && pageNumber !== 0) {
                // Loop back to the first page
                getTasksList(0, true);
                return;
            }

            // Update the last visible document for the next page
            const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
            setLastVisible(newLastVisible);

            // Replace the listings with the new set of documents for the current page
            setTasks(querySnapshot.docs.map(doc => ({ 
                docID: doc.id, 
                taskData: doc.data()
             })));
            setPage(pageNumber);
        } catch (error) {
            //error message
            console.log(error);
        }
    };

    return { tasks, getTasksList, page };
}

export default useTasksPagination