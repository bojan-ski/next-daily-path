'use client'
import Link from "next/link"
// lib
import userSignIn from "@/lib/userSignIn"
// context
import { useGlobalContext } from "@/app/context"
// components
import PageHeader from "@/components/PageHeader"
import FormAuth from "@/components/FormAuth"
import FormInput from "@/components/FormInput"

import { useRouter } from "next/navigation"

const SignIn = () => {
  const { userProfileDetails, setUserProfileDetails } = useGlobalContext()
  const router = useRouter()

  const handleSignInUserSubmit = async e => {
    e.preventDefault()

    const enteredEmail = e.target.elements[0].value
    const enteredPassword = e.target.elements[1].value

    const response = await userSignIn(enteredEmail, enteredPassword)
    console.log(response.user);

    if (response) {
      setUserProfileDetails({
        userLoggedIn: true,
        userID: response.user.uid,
        userUsername: response.user.displayName,
      });

      router.push('/tasks')
    }
    // if (response) {
    //   e.target.elements[0].value = ''
    //   e.target.elements[1].value = ''
    // }
  }

  console.log(userProfileDetails);  

  return (
    <div className='sign-in-page'>
      <PageHeader pageTitle="Sign In" />

      <section className='sign-in-form bg-white w-1/2 mx-auto my-16 px-10 py-8 rounded-lg'>

        <FormAuth handleSubmit={handleSignInUserSubmit} btnTitle='Sign In'>
          {/* login email */}
          <FormInput label='Email address' name="loginEmail" placeholder='Enter email address' type='email' required={true} />

          {/* login password */}
          <FormInput label='Password' name="loginPassword" placeholder='Enter password' type='password' required={true} />
        </FormAuth>

        <div className="text-end mt-3">
          <p className='mb-1'>
            Need a new password?
          </p>
          <Link href='/forgot-password' className="text-orange-300 hover:text-orange-400 font-bold">
            Forgot Password
          </Link>
        </div>
      </section>
    </div>
  )
}

export default SignIn