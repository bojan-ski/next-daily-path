'use client'
import Link from "next/link"
// context
import { useGlobalContext } from "@/app/context"

const OnboardingOptions = () => {
    const { userProfileDetails, logOutUser } = useGlobalContext()
    // console.log(userProfileDetails);

    return (
        <>
            {userProfileDetails && userProfileDetails?.userLoggedIn ? (
                <button onClick={() => logOutUser()} className="log-out-btn bg-red-500 rounded-md px-2 py-1 font-bold hover:bg-red-600">
                    Log Out
                </button>
            ) : (
                <div>
                    <Link href='/sign-up' className="log-out-btn bg-amber-500 rounded-md px-2 py-1 me-5 font-bold hover:bg-amber-600">
                        Sign Up
                    </Link>
                    <Link href='/sign-in' className="log-out-btn bg-amber-500 rounded-md px-2 py-1 font-bold hover:bg-amber-600">
                        Sign In
                    </Link>
                </div>
            )}
        </>
    )
}

export default OnboardingOptions