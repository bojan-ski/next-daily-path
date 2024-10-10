'use client'
import { useContext, createContext, useState, useEffect } from "react";
// firebase/firestore funcs
import { auth } from "./firebase.config";
import { onAuthStateChanged } from "firebase/auth"
// lib - firebase
import getTasksList from "@/lib/firebase/getTasksList"


const AppContext = createContext()

export const AppProvider = ({ children }) => {
    // user details
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
        console.log('useEffect - context');
        fetchUserDetails()
    }, [])

    // tasks list
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        if (!userProfileDetails.userID) return;
    
        const apiCall = await getTasksList(userProfileDetails.userID);         
    
        if (!apiCall.error) {
          setTasks(apiCall);
          console.log('fetchTasks');
        } else {
          console.log(apiCall.error);
        }
      };

    return <AppContext.Provider value={{
        userProfileDetails, // OnboardingOptions, TasksList
        setUserProfileDetails, // SignOutBtn
        tasks, // TasksList, TaskItem
        setTasks, // TaskItem
        fetchTasks, // FormNewTask, TasksList
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)