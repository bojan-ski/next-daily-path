'use client'
import { useContext, createContext, useState, useEffect } from "react";
// firebase/firestore funcs
import { auth } from "./firebase.config";
import { onAuthStateChanged } from "firebase/auth";
// custom hook
import useTasksPagination from "@/hooks/useTasksPagination";


const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // USER PROFILE - DATA
    const [userProfileDetails, setUserProfileDetails] = useState({
        userLoggedIn: false,
        userID: '',
        userUsername: '',
    })

    const fetchUserDetails = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserProfileDetails({
                    userLoggedIn: true,
                    userID: user.uid,
                    userUsername: user.displayName,
                });
            } else {
                setUserProfileDetails({
                    userLoggedIn: false,
                    userID: '',
                    userUsername: '',
                });
            }
        });
    };

    useEffect(() => {        
        fetchUserDetails();
    }, [])

    // TASKS
    const itemsPerPage = 8;
    const { tasks, setTasks, getTasksList, page, isLoading } = useTasksPagination(userProfileDetails?.userID, itemsPerPage);

    return <AppContext.Provider value={{
        userProfileDetails, // AuthenticationOptions, FormNewTask, TasksList, Task, DiaryEntries, FormNewDiaryEntry
        setUserProfileDetails, // AuthenticationOptions

        tasks, // TasksList, DeleteTaskBtn
        setTasks, // Task, DeleteTaskBtn, EditTaskModal 
        getTasksList, // FormNewTask, TasksList
        page, // TasksList
        isLoading, // TasksList
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)