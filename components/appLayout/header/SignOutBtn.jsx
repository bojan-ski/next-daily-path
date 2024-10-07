import { useRouter } from "next/navigation";
// firebase/firestore funcs
import { auth } from "@/app/firebase.config";
import { signOut } from "firebase/auth";

const SignOutBtn = ({ setUserProfileDetails }) => {    
    const router = useRouter
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

    return (
        <button onClick={() => logOutUser()} className="log-out-btn bg-red-500 rounded-md px-2 py-1 font-bold hover:bg-red-600">
            Log Out
        </button>
    )
}

export default SignOutBtn