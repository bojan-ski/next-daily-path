'use client'
import { useContext, createContext, useState, useEffect } from "react";
// firebase/firestore funcs
import { auth } from "./firebase.config";
import { onAuthStateChanged } from "firebase/auth"


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

    return <AppContext.Provider value={{
        userProfileDetails, // OnboardingOptions, TasksListContainer
        setUserProfileDetails, // SignOutBtn
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)