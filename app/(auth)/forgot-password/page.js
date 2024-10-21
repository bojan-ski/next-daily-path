'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
// components
import PageHeader from "@/components/PageHeader"
import FormInput from "@/components/FormInput"
import FormSubmitBtn from "@/components/FormSubmitBtn"
// firebase func
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "@/app/firebase.config"
// lib
import userResetPassword from "@/lib/firebase/userResetPassword"

const ForgotPassword = () => {
  const router = useRouter()

  const handleResetPassword = async e => {
    e.preventDefault()

    if (window.confirm('Are you sure you want to reset Your password?')) {
      const enteredEmail = e.target.elements[0].value.trim()

      const response = await sendPasswordResetEmail(auth, enteredEmail)
      // const response = await userResetPassword(enteredEmail)

      if (response) {
        e.target.elements[0].value = ''

        // navigate user
        router.push('/tasks')
      }
    }
  }

  return (
    <div className='forgot-password-page mt-10'>
      <PageHeader pageTitle="Forgot Password" />

      <section className='forgot-password-form bg-orange-100 w-1/2 mx-auto my-16 px-10 py-8 rounded-lg'>
        <form onSubmit={handleResetPassword}>
          {/* login email */}
          <FormInput label='Email address' name="loginEmail" placeholder='Enter email address' type='email' required={true} />

          {/* submit btn */}
          <FormSubmitBtn btnTitle='Reset Password' />
        </form>

        <div className="text-end mt-3">
          <p className='mb-1 text-stone-950'>
            Don&apos;t need a new password?
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