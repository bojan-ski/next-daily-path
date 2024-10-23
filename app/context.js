'use client'
import { useContext, createContext, useState, useEffect } from "react";
// firebase/firestore funcs
import { auth } from "./firebase.config";
import { onAuthStateChanged } from "firebase/auth"
// custom hook
import useTasksPagination from "@/hooks/useTasksPagination";

const AppContext = createContext()

export const AppProvider = ({ children }) => {
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
        fetchUserDetails()
    }, [])

    // TASKS
    const itemsPerPage = 10;
    const { tasks, setTasks, getTasksList, page } = useTasksPagination(userProfileDetails.userID, itemsPerPage);

    return <AppContext.Provider value={{
        userProfileDetails, // OnboardingOptions, FormNewTask, TasksList, Task
        setUserProfileDetails, // SignOutBtn
        tasks, // TasksList, DeleteTaskBtn
        setTasks, // DeleteTaskBtn, EditTaskModal, Task
        getTasksList, // FormNewTask, TasksList
        page, // TasksList
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)