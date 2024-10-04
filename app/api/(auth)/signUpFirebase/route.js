import { NextResponse } from "next/server";
// firebase funcs
import { auth, db } from "@/app/firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export const POST = async (request) => {
  const { username, email, password } = await request.json()

  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    const newUser = userCredentials.user

    updateProfile(auth.currentUser, {
      displayName: username
    })

    const userCredentialsCopy = {
      username,
      email,
      timestamp: serverTimestamp()
    }

    await setDoc(doc(db, 'users', newUser.uid), userCredentialsCopy)

    // success message
    console.log('your account has been created');

    return NextResponse.json({ "message": "all good" });
  } catch (error) {
    // error message
    console.log(error);

    return false
  }
}