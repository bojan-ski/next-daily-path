import Link from "next/link";
// components
import PageHeader from "@/components/PageHeader";
import ResetPasswordForm from "@/components/forgotPasswordPage/ResetPasswordForm";


const ForgotPassword = () => {
  return (
    <div className='forgot-password-page mt-10'>

      <PageHeader pageTitle="Forgot Password" />

      <section className='forgot-password-form bg-orange-100 w-1/2 mx-auto my-10 px-10 py-8 rounded-lg'>
        <ResetPasswordForm />

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