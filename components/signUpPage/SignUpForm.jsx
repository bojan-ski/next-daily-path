'use client'
import { useRouter } from "next/navigation";
// lib
import createAccount from "@/lib/firebase/createAccount";
// components
import FormInput from "../FormInput";
import FormInputCheckbox from "../FormInputCheckbox";
import FormSubmitBtn from "../FormSubmitBtn";
// toast
import toast from "react-hot-toast";


const SignUpForm = () => {
  const router = useRouter();

  const handleSignUpUserSubmit = async e => {
    e.preventDefault();

    const enteredUsername = e.target.elements[0].value.trim();
    const enteredEmail = e.target.elements[1].value.trim();
    const enteredPassword = e.target.elements[2].value;

    // check fields
    if (!enteredUsername || !enteredEmail || !enteredPassword) return toast.error('All fields are required!');

    // if all good 
    const response = await createAccount(enteredUsername, enteredEmail, enteredPassword);

    if (response) {
      // success message
      toast.success('your account has been created');

      // clear form fields
      e.target.elements[0].value = '';
      e.target.elements[1].value = '';
      e.target.elements[2].value = '';
      e.target.elements[3].checked = false;
      e.target.elements[4].checked = false;

      // navigate user
      router.push('/tasks');
    } else {
      // error message
      toast.error('There was an error while creating your account');
    }
  }

  return (
    <form onSubmit={handleSignUpUserSubmit}>
      {/* sign up username */}
      <FormInput label='Username' name="signUpUsername" type='text' required={true} placeholder='Enter username' />

      {/* sign up email */}
      <FormInput label='Email address' name="signUpEmail" type='email' required={true} placeholder='Enter email address' />

      {/* sign up password */}
      <FormInput label='Password' name="signUpPassword" type='password' required={true} placeholder='Enter password' />

      <div className="mb-7">
        {/* Terms & Conditions checkbox */}
        <FormInputCheckbox linkTitle='Terms & Conditions' linkUrl='terms-and-conditions' />

        {/* Privacy Policy checkbox */}
        <FormInputCheckbox linkTitle='Privacy Policy' linkUrl='privacy-policy' />
      </div>

      {/* submit btn */}
      <FormSubmitBtn btnTitle='Sign Up' />
    </form>
  )
}

export default SignUpForm