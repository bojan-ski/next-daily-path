'use client'
import Link from "next/link"
// lib
import userSignIn from "@/lib/userSignIn"
// components
import PageHeader from "@/components/PageHeader"
import FormInput from "@/components/FormInput"


const SignIn = () => {
  const handleSignInUserSubmit = async e => {
    e.preventDefault()

    const enteredEmail = e.target.elements[0].value
    const enteredPassword = e.target.elements[1].value

    const response = await userSignIn(enteredEmail, enteredPassword)
    console.log(response);

    if (response) {
      e.target.elements[0].value = ''
      e.target.elements[1].value = ''
    }
  }

  return (
    <div className='sign-in-page'>
      <PageHeader pageTitle="Sign In" />

      <section className='sign-in-form bg-white w-1/2 mx-auto my-16 px-10 py-8 rounded-lg'>
        <form onSubmit={handleSignInUserSubmit}>

          <FormInput label='Email address' name="loginEmail" placeholder='Enter email address' type='email' required={true} />

          {/* login password */}
          <FormInput label='Password' name="loginPassword" placeholder='Enter password' type='password' required={true} />

          {/* login submit btn */}
          <button type="submit" className="bg-orange-300 rounded-md px-5 py-2 mt-4 font-bold hover:bg-orange-400">
            Sign In
          </button>
        </form>

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