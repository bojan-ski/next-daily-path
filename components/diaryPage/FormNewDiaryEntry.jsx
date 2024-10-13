'use client'
import { useState } from "react"
// context
import { useGlobalContext } from "@/app/context"
// lib - actions
import { addNewDiaryEntryAction } from "@/lib/actions/diaryActions"
// components
import FormTextArea from "@/components/FormTextArea"
import FormSubmitBtn from "@/components/FormSubmitBtn"

const FormNewDiaryEntry = () => {
    const { userProfileDetails } = useGlobalContext()

    const [uploadedImagesData, setUploadedImagesData] = useState({
        newDiaryEntryImgOne: null,
        newDiaryEntryImgTwo: null,
    });

    const onMutate = (e, imageField) => {
        const { files } = e.target;
        setUploadedImagesData((prevState) => ({
            ...prevState,
            [imageField]: files[0],
        }));
    };

    const addNewDiaryEntryData = addNewDiaryEntryAction.bind(null, userProfileDetails.userID, userProfileDetails.userUsername)

    return (
        <section className='new-diary-entry-form bg-orange-100 py-5 px-10 mb-10 w-full mx-auto rounded-xl'>

            <h2 className="text-4xl text-black font-semibold text-center mb-5">
                New Entry
            </h2>

            <form className="text-center" action={addNewDiaryEntryData}>

                <input className="w-1/2 mb-5" type="text" name='newDiaryEntryTitle' placeholder='Title' required={true} maxLength={50} />

                {/* GRID ITEM ONE */}
                <div className="grid grid-cols-2 gap-4 mb-5">

                    {/* new diary entry - img 1 */}
                    <div className="mb-3">
                        <label className="form-label text-black font-bold">
                            Image 1 (size 1MB max)
                        </label>

                        {/* Hidden file input for image 1 */}
                        <input
                            className="hidden"
                            type="file"
                            name="newDiaryEntryImgOne"
                            id="newDiaryEntryImgOne"
                            onChange={(e) => onMutate(e, 'newDiaryEntryImgOne')}
                            accept=".jpg,.png,.jpeg"
                        />

                        {/* Button to trigger file input for image 1 */}
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => document.getElementById('newDiaryEntryImgOne').click()}
                        >
                            Add Image 1
                        </button>

                        {/* Image 1 preview */}
                        {uploadedImagesData.newDiaryEntryImgOne && (
                            <div className="mt-3">
                                <img
                                    src={URL.createObjectURL(uploadedImagesData.newDiaryEntryImgOne)}
                                    alt="newDiaryEntryImgOne"
                                    className="img-thumbnail"
                                    style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                                />
                            </div>
                        )}
                    </div>

                    {/* new diary entry - content 1 */}
                    <FormTextArea
                        name="newDiaryEntryContentOne"
                        rows={15}
                        minLength={10}
                        maxLength={1200}
                        required={true}
                    />
                </div>

                {/* GRID ITEM TWO */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                    {/* new diary entry - content 2 */}
                    <FormTextArea
                        name="newDiaryEntryContentTwo"
                        rows={15}
                        minLength={10}
                        maxLength={1200}
                        required={false}
                    />

                    {/* new diary entry - img 2 */}
                    <div className="mb-3">

                        <label className="form-label text-black font-bold">
                            Image 2 (size 1MB max)
                        </label>

                        {/* Hidden file input for image 2 */}
                        <input
                            className="hidden"
                            type="file"
                            name="newDiaryEntryImgTwo"
                            id="newDiaryEntryImgTwo"
                            onChange={(e) => onMutate(e, 'newDiaryEntryImgTwo')}
                            accept=".jpg,.png,.jpeg"
                        />

                        {/* Button to trigger file input for image 2 */}
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => document.getElementById('newDiaryEntryImgTwo').click()}
                        >
                            Add Image 2
                        </button>

                        {/* Image 2 preview */}
                        {uploadedImagesData.newDiaryEntryImgTwo && (
                            <div className="mt-3">
                                <img
                                    src={URL.createObjectURL(uploadedImagesData.newDiaryEntryImgTwo)}
                                    alt="newDiaryEntryImgTwo"
                                    className="img-thumbnail"
                                    style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* SUBMIT BTN */}
                <FormSubmitBtn btnTitle='Add new entry' />
            </form>
        </section>
    )
}

export default FormNewDiaryEntry