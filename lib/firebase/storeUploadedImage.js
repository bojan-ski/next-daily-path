// firebase/firestore funcs
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// store images in firebase
const storeUploadedImage = async (storageFile, uploadedImage, diaryEntryTitle, username) => {
    return new Promise((resolve, reject) => {
        const storage = getStorage();

        const storageRef = ref(storage, `${storageFile}-${username}}/${diaryEntryTitle}/${uploadedImage.name}`);

        const uploadTask = uploadBytesResumable(storageRef, uploadedImage);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                reject(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            }
        );
    })
}

export default storeUploadedImage