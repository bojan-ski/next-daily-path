const getTasksList = async (userID) => {   
    try {
        const apiCall = await fetch('http://localhost:3000/api/tasks', {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${userID}`
            }
        });
        const response = await apiCall.json()      

        return response;
    } catch (error) {
        console.log(error);

        return null;
    }
}

export default getTasksList