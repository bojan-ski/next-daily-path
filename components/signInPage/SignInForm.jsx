'use client'
import { useRouter } from "next/navigation";
// lib
import userLogin from "@/lib/firebase/userLogin";
// components
import FormInput from "@/components/FormInput";
import FormSubmitBtn from "@/components/FormSubmitBtn";
// toast
import toast from "react-hot-toast";


const SignInForm = () => {
    const router = useRouter()

    const handleSignInUserSubmit = async e => {
        e.preventDefault();

        const enteredEmail = e.target.elements[0].value.trim();
        const enteredPassword = e.target.elements[1].value;

        // check fields
        if (!enteredEmail || !enteredPassword) return toast.error('All fields are required!');

        // if all good 
        const response = await userLogin(enteredEmail, enteredPassword);

        if (response) {
            e.target.elements[0].value = '';
            e.target.elements[1].value = '';

            // success message
            toast.success('You have successfully logged in');

            // navigate user
            router.push('/tasks');
        } else {
            // error message
            toast.error('There was an error while logging in');
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