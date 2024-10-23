'use client'
import { useRouter } from "next/navigation"
// components
import FormInput from "@/components/FormInput"
import FormSubmitBtn from "@/components/FormSubmitBtn"
// firebase funcs
import { auth } from "@/app/firebase.config"
import { signInWithEmailAndPassword } from "firebase/auth"
// toast
import toast from "react-hot-toast"
// lib
import userSignIn from "@/lib/firebase/userSignIn"


const SignInForm = () => {
    const router = useRouter()

    const handleSignInUserSubmit = async e => {
        e.preventDefault()

        const enteredEmail = e.target.elements[0].value
        const enteredPassword = e.target.elements[1].value

        const response = await signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        
        // -------- FIREBASE NIJE KOMPATIBILAN SA NEXT.js-om --------
        // const response = await userSignIn(enteredEmail, enteredPassword)

        if (response) {
            e.target.elements[0].value = ''
            e.target.elements[1].value = ''

            // success message
            toast.success('You have successfully logged in')

            // navigate user
            router.push('/tasks')
        }
    }

    return (
        <form onSubmit={handleSignInUserSubmit}>
            {/* login email */}
            <FormInput label='Email address' name="loginEmail" placeholder='Enter email address' type='email' required={true} />

            {/* login password */}
            <FormInput label='Password' name="loginPassword" placeholder='Enter password' type='password' required={true} />

            {/* submit btn */}
            <FormSubmitBtn btnTitle='Sign In' />
        </form>
    )
}

export default SignInForm