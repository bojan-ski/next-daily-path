const userResetPassword = async (email) => {
    try {
        const apiCall = await fetch('http://localhost:3000/api/resetPasswordFirebase', {
            method: "POST",
            body: JSON.stringify({
                email: email,
            }),
        })
        const response = await apiCall.json()

        return response;
    } catch (error) {
        console.log(error);

        return null;
    }
}

export default userResetPassword