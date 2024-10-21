'use client'
import { useRouter } from "next/navigation"
// components
import PageHeader from "@/components/PageHeader"
import FormInput from "@/components/FormInput"
import FormInputCheckbox from "@/components/FormInputCheckbox"
import FormSubmitBtn from "@/components/FormSubmitBtn"
// firebase funcs
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { doc, serverTimestamp, setDoc } from "firebase/firestore"
import { auth, db } from "@/app/firebase.config"
// toast
import toast from "react-hot-toast"
// lib
import userSignUp from "@/lib/firebase/userSignUp"

const SignUp = () => {
  const router = useRouter()

  const handleSignUpUserSubmit = async e => {
    e.preventDefault()

    const enteredUsername = e.target.elements[0].value.trim()
    const enteredEmail = e.target.elements[1].value.trim()
    const enteredPassword = e.target.elements[2].value

    try {
      // create account
      const userCredentials = await createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      const newUser = userCredentials.user

      // update user - username
      updateProfile(auth.currentUser, {
        displayName: enteredUsername
      })

      // store in db
      const userCredentialsCopy = {
        enteredUsername,
        enteredEmail,
        timestamp: serverTimestamp()
      }

      await setDoc(doc(db, 'users', newUser.uid), userCredentialsCopy)

      // success message
      toast.success('your account has been created');

      // clear form fields
      e.target.elements[0].value = ''
      e.target.elements[1].value = ''
      e.target.elements[2].value = ''
      e.target.elements[3].checked = false
      e.target.elements[4].checked = false

      // navigate user
      router.push('/tasks')
    } catch (error) {
      // error message
      toast.error('There was an error while creating your account')
      // console.log(error);
    }
  }

  // const handleSignUpUserSubmit = async e => {
  //   e.preventDefault()

  //   const enteredUsername = e.target.elements[0].value.trim()
  //   const enteredEmail = e.target.elements[1].value.trim()
  //   const enteredPassword = e.target.elements[2].value

  //   const response = await userSignUp(enteredUsername, enteredEmail, enteredPassword)
  //   console.log(response);

  //   if (response) {      
  //     e.target.elements[0].value = ''
  //     e.target.elements[1].value = ''
  //     e.target.elements[2].value = ''
  //     e.target.elements[3].checked = false
  //     e.target.elements[4].checked = false
  //   }
  // }

  return (
    <div className='sign-up-page mt-10'>
      <PageHeader pageTitle="Sign Up" />

      <section className='sign-up-form bg-orange-100 w-1/2 mx-auto my-16 px-10 py-8 rounded-lg'>

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
      </section>
    </div>
  )
}

export default SignUp