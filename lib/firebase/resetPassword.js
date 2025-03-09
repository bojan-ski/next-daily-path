import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/app/firebase.config";


const resetPassword = async (enteredEmail) => {
    try {
        await sendPasswordResetEmail(auth, enteredEmail);

        return true;
    } catch (error) {
        return false;
    }
}

export default resetPassword