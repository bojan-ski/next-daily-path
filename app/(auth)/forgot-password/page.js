'use client'
import Link from "next/link"
// lib
import userResetPassword from "@/lib/userResetPassword"
// components
import PageHeader from "@/components/PageHeader"
import FormInput from "@/components/FormInput"
import FormAuth from "@/components/FormAuth"


const ForgotPassword = () => {
  const handleResetPassword = async e => {
    e.preventDefault()

    if (window.confirm('Are you sure you want to reset Your password?')) {
      const enteredEmail = e.target.elements[0].value.trim()

      const response = await userResetPassword(enteredEmail)
      console.log(response);

      if (response) {
        e.target.elements[0].value = ''
      }
    }
  }

  return (
    <div className='forgot-password-page'>
      <PageHeader pageTitle="Forgot Password" />

      <section className='forgot-password-form bg-white w-1/2 mx-auto my-16 px-10 py-8 rounded-lg'>

        <FormAuth handleSubmit={handleResetPassword} btnTitle='Reset Password'>
          {/* login email */}
          <FormInput label='Email address' name="loginEmail" placeholder='Enter email address' type='email' required={true} />
        </FormAuth>

        <div className="text-end mt-3">
          <p className='mb-1'>
            Don't need a new password?
          </p>
          <Link href='/sign-in' className="text-orange-300 hover:text-orange-400 font-bold">
            Login
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ForgotPassword