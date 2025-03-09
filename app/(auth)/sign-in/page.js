import Link from "next/link";
// components
import PageHeader from "@/components/PageHeader";
import SignInForm from "@/components/signInPage/SignInForm";


const SignIn = () => {
  return (
    <div className='sign-in-page mt-10'>
      
      <PageHeader pageTitle="Sign In" />

      <section className='sign-in-form bg-orange-100 w-1/2 mx-auto my-10 px-10 py-8 rounded-lg'>
        <SignInForm />

        <div className="text-end mt-3">
          <p className='mb-1 text-stone-950'>
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