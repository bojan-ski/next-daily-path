import Link from "next/link"

const Onboarding = () => {
    return (
        <div className="onboarding mx-5 my-3 flex justify-between">
            <h2 className="mb-0">
                Daily Path
            </h2>

            <div>
                <Link href='/sign-up' className='me-5'>
                    Sign Up
                </Link>
                <Link href='/sign-in'>
                Sign In
                </Link>
            </div>
        </div>
    )
}

export default Onboarding