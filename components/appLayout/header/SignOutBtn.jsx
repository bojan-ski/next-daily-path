import { useRouter } from "next/navigation";
// firebase/firestore funcs
import { auth } from "@/app/firebase.config";
import { signOut } from "firebase/auth";
// icon
import { FaSignOutAlt } from "react-icons/fa";

const SignOutBtn = ({ setUserProfileDetails }) => {    
    const router = useRouter()

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

                // navigate user
                router.push('/')
            } catch (error) {
                //error message
                console.log(error);
            }
        }
    }

    return (
        <button onClick={() => logOutUser()} className="text-white bg-red-500 rounded-md px-4 py-2 hover:bg-red-600">
            <FaSignOutAlt size={24}/>
        </button>
    )
}

export default SignOutBtn