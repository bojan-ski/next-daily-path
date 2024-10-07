'use client'
import { useContext, createContext, useState, useEffect } from "react";
// firebase/firestore funcs
import { auth } from "./firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    // user details
    const [userProfileDetails, setUserProfileDetails] = useState({
        userLoggedIn: false,
        userID: '',
        // userID: 'xOJ6jCHn8cf4NvCh0X4oS0yXHb83',
        userUsername: '',
    })

    const fetchUserDetails = () => {
        onAuthStateChanged(auth, (user) => {
            // console.log(auth);
            // console.log(user);
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
        // console.log(userProfileDetails);
    }, [])

    // log out user
    const logOutUser = async () => {
        if (window.confirm('Are you sure you want to log out')) {
            try {
                await signOut(auth)

                setUserProfileDetails({
                    userLoggedIn: false,
                    userID: '',
                    userUsername: '',
                })

                // success message
                console.log('you have successfully logged out');
            } catch (error) {
                //error message
                console.log(error);
            }
        }
    }

    return <AppContext.Provider value={{
        userProfileDetails, // OnboardingOptions
        setUserProfileDetails,
        logOutUser, // OnboardingOptions
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)