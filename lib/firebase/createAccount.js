import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "@/app/firebase.config";


const createAccount = async (enteredUsername, enteredEmail, enteredPassword) => {
    try {
        // create account
        const userCredentials = await createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword);
        const newUser = userCredentials?.user;

        // update user - username
        updateProfile(auth.currentUser, {
            displayName: enteredUsername
        });

        // store in db
        const userCredentialsCopy = {
            enteredUsername,
            enteredEmail,
            timestamp: serverTimestamp()
        };

        await setDoc(doc(db, 'users', newUser?.uid), userCredentialsCopy)

        return true;
    } catch (error) {
        return false;
    }
}

export default createAccount