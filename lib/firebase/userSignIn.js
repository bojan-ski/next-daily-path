const userSignIn = async (email, password) => {
    try {
        const apiCall = await fetch('http://localhost:3000/api/signInFirebase', {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        const response = await apiCall.json()

        return response;
    } catch (error) {
        // console.log(error);

        return null;
    }
}

export default userSignIn