'use client'
import Link from "next/link";
// context
import { useGlobalContext } from "@/app/context";
// component
import SignOutBtn from "./SignOutBtn";
// icon
import { FaWpforms } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";


const AuthenticationOptions = () => {
    const { userProfileDetails, setUserProfileDetails } = useGlobalContext();

    return (
        <>
            {userProfileDetails && userProfileDetails?.userLoggedIn ? (
                <SignOutBtn setUserProfileDetails={setUserProfileDetails} />
            ) : (
                <div className="flex items-center justify-end">
                    <Link href='/sign-up' className="bg-amber-500 text-white rounded-md px-4 py-2 me-5 font-bold hover:bg-amber-600">
                        <FaWpforms size={24}/>
                    </Link>
                    <Link href='/sign-in' className="bg-amber-500 text-white rounded-md px-4 py-2 font-bold hover:bg-amber-600">
                        <IoIosLogIn size={24}/>
                    </Link>
                </div>
            )}
        </>
    )
}

export default AuthenticationOptions