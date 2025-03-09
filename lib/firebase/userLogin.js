import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase.config";


const userLogin = async (enteredEmail, enteredPassword) => {
    try {
        await signInWithEmailAndPassword(auth, enteredEmail, enteredPassword);

        return true;
    } catch (error) {
        return false;
    }
}

export default userLogin