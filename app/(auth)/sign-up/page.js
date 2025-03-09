// components
import PageHeader from "@/components/PageHeader";
import SignUpForm from "@/components/signUpPage/SignUpForm";


const SignUp = () => {
  return (
    <div className='sign-up-page mt-10'>
      
      <PageHeader pageTitle="Sign Up" />

      <section className='sign-up-form bg-orange-100 w-1/2 mx-auto my-10 px-10 py-8 rounded-lg'>
        <SignUpForm />
      </section>
    </div>
  )
}

export default SignUp