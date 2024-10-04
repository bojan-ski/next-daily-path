import { NextResponse } from "next/server";
// firebase
import { auth } from "@/app/firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";

export const POST = async (request) => {
    const { email } = await request.json()

    try {
        await sendPasswordResetEmail(auth, email)
        // const apiCall = await sendPasswordResetEmail(auth, email)
        // console.log(apiCall);

        //success message
        console.log('check email in order to reset password');

        return NextResponse.json({ "message": "reset password - all good" });
    } catch (error) {
        //error message
        console.log(error);

        return null
    }
}