'use client'
// lib
import userSignUp from "@/lib/userSignUp"
// components
import PageHeader from "@/components/PageHeader"
import FormInput from "@/components/FormInput"
import FormInputCheckbox from "@/components/FormInputCheckbox"

const SignUp = () => {
  const handleSignUpUserSubmit = async e => {
    e.preventDefault()

    const enteredUsername = e.target.elements[0].value.trim()
    const enteredEmail = e.target.elements[1].value.trim()
    const enteredPassword = e.target.elements[2].value

    const response = await userSignUp(enteredUsername, enteredEmail, enteredPassword)
    console.log(response);

    if (response) {
      e.target.elements[0].value = ''
      e.target.elements[1].value = ''
      e.target.elements[2].value = ''
      e.target.elements[3].checked = false
      e.target.elements[4].checked = false
    }
  }

  return (
    <div className='sign-up-page'>
      <PageHeader pageTitle="Sign Up" />

      <section className='sign-up-form bg-white w-1/2 mx-auto my-16 px-10 py-8 rounded-lg'>
        <form onSubmit={handleSignUpUserSubmit}>

          {/* sign up username */}
          <FormInput label='Username' name="signUpUsername" type='text' required={true} placeholder='Enter username'/>

          {/* sign up email */}
          <FormInput label='Email address' name="signUpEmail" type='email' required={true} placeholder='Enter email address'/>

          {/* sign up password */}
          <FormInput label='Password' name="signUpPassword" type='password' required={true} placeholder='Enter password'/>

          {/* Terms & Conditions checkbox */}
          <FormInputCheckbox linkTitle='Terms & Conditions' linkUrl='terms-and-conditions' />

          {/* Privacy Policy checkbox */}
          <FormInputCheckbox linkTitle='Privacy Policy' linkUrl='privacy-policy' />

          {/* login submit btn */}
          <button type="submit" className="bg-orange-300 rounded-md px-5 py-2 mt-5 font-bold hover:bg-orange-400">
            Sign Up
          </button>
        </form>
      </section>
    </div>
  )
}

export default SignUp