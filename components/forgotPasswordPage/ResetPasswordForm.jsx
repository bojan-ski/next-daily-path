'use client'
import { useRouter } from "next/navigation";
// lib
import resetPassword from "@/lib/firebase/resetPassword";
// components
import FormInput from "@/components/FormInput";
import FormSubmitBtn from "@/components/FormSubmitBtn";
// toast
import toast from "react-hot-toast";


const ResetPasswordForm = () => {
    const router = useRouter();

    const handleResetPassword = async e => {
        e.preventDefault();

        if (window.confirm('Are you sure you want to reset Your password?')) {
            const enteredEmail = e.target.elements[0].value.trim();

            const response = await resetPassword(enteredEmail);

            if (response) {
                e.target.elements[0].value = '';

                // success message
                toast.success('Please check you email');

                // navigate user
                router.push('/');
            } else {
                // error message
                toast.error('There was an error while password reset');
            }
        }
    }

    return (
        <form onSubmit={handleResetPassword}>
            {/* login email */}
            <FormInput label='Email address' name="loginEmail" placeholder='Enter email address' type='email' required={true} />

            {/* submit btn */}
            <FormSubmitBtn btnTitle='Reset Password' />
        </form>
    )
}

export default ResetPasswordForm