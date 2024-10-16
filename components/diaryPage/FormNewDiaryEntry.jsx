'use client'
import { useState } from "react"
// context
import { useGlobalContext } from "@/app/context"
// lib - actions
import { addNewDiaryEntryAction } from "@/lib/actions/diaryActions"
// components
import FormTextArea from "@/components/FormTextArea"
import FileInputImage from "../FileInputImage"
import FormSubmitBtn from "@/components/FormSubmitBtn"

const FormNewDiaryEntry = ({ customEntry }) => {
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
            <div>
                <form className="text-center" action={addNewDiaryEntryData}>
                    <input className="block w-1/2 mx-auto my-7 rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" name='newDiaryEntryTitle' placeholder='Title' required={true} maxLength={50} />

                    {/* GRID ITEM ONE */}
                    {customEntry.imageOne ? (
                        <div className="grid grid-cols-2 gap-4 mb-5">
                            {/* new diary entry - img 1 */}
                            <FileInputImage
                                image={uploadedImagesData.newDiaryEntryImgOne}
                                onMutate={(e) => onMutate(e, 'newDiaryEntryImgOne')}
                                inputId="newDiaryEntryImgOne"
                            />

                            {/* new diary entry - content 1 */}
                            <FormTextArea
                                name="newDiaryEntryContentOne"
                                rows={27}
                                minLength={10}
                                maxLength={2000}
                                required={true}
                            />
                        </div>
                    ) : (
                        <>
                            {/* new diary entry - content 1 */}
                            <FormTextArea
                                name="newDiaryEntryContentOne"
                                rows={15}
                                minLength={10}
                                maxLength={2000}
                                required={true}
                            />
                        </>
                    )}

                    {(customEntry.imageTwo || customEntry.entryContentTwo) && (
                        < div className={`grid mb-5 ${customEntry.imageTwo && customEntry.entryContentTwo ? 'grid-cols-2 gap-4' : ''}`}>
                            {(customEntry.entryContentTwo && !customEntry.imageTwo) && (
                                <>
                                    {/* new diary entry - content 2 */}
                                    <FormTextArea
                                        name="newDiaryEntryContentTwo"
                                        rows={15}
                                        minLength={10}
                                        maxLength={2000}
                                        required={false}
                                    />
                                </>
                            )}

                            {(customEntry.imageTwo && !customEntry.entryContentTwo) && (
                                <>
                                    {/* new diary entry - img 2 */}
                                    <FileInputImage
                                        image={uploadedImagesData.newDiaryEntryImgTwo}
                                        onMutate={(e) => onMutate(e, 'newDiaryEntryImgTwo')}
                                        inputId="newDiaryEntryImgTwo"
                                    />
                                </>
                            )}

                            {(customEntry.imageTwo && customEntry.entryContentTwo) && (
                                <>
                                    {/* new diary entry - content 2 */}
                                    <FormTextArea
                                        name="newDiaryEntryContentTwo"
                                        rows={27}
                                        minLength={10}
                                        maxLength={2000}
                                        required={false}
                                    />

                                    {/* new diary entry - img 2 */}
                                    <FileInputImage
                                        image={uploadedImagesData.newDiaryEntryImgTwo}
                                        onMutate={(e) => onMutate(e, 'newDiaryEntryImgTwo')}
                                        inputId="newDiaryEntryImgTwo"
                                    />
                                </>
                            )}
                        </div>
                    )}

                    {/* SUBMIT BTN */}
                    <FormSubmitBtn btnTitle='Add new entry' />
                </form>
            </div >
        </section >
    )
}

export default FormNewDiaryEntry