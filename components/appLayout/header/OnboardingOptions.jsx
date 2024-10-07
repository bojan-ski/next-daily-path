'use client'
import Link from "next/link"
// context
import { useGlobalContext } from "@/app/context"
import SignOutBtn from "./SignOutBtn"

const OnboardingOptions = () => {
    const { userProfileDetails, setUserProfileDetails } = useGlobalContext()
    // console.log(userProfileDetails);

    return (
        <>
            {userProfileDetails && userProfileDetails?.userLoggedIn ? (
                <SignOutBtn setUserProfileDetails={setUserProfileDetails}/>
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