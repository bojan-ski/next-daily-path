import { useState } from "react";
import { redirect } from "next/navigation";
// components
import FormTextArea from "@/components/FormTextArea";
import FileInputImage from "../FileInputImage";
import FormSubmitBtn from "@/components/FormSubmitBtn";
import toast from "react-hot-toast";


const FormNewDiaryEntry = ({ customEntry, addNewDiaryEntryData }) => {
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

    const handleCreateNewEntry = async (formData) => {
        const response = await addNewDiaryEntryData(formData);

        if (response) {
            // success message
            toast.success('New diary entry created');

            // redirect user
            redirect('/diary');
        } else {
            // error message
            toast.error('There was an error creating a new Diary entry');
        }
    }


    return (
        <section className='new-diary-entry-form bg-orange-100 py-5 px-10 mb-10 w-full mx-auto rounded-xl'>
            <div>
                <form className="text-center" action={handleCreateNewEntry}>
                    <input
                        className="input input-bordered w-1/2 mb-10"
                        type="text"
                        name='newDiaryEntryTitle'
                        placeholder='Title'
                        required={true}
                        maxLength={50}
                    />

                    {/* GRID ITEM ONE */}
                    {customEntry.imageOne ? (
                        <div className="grid lg:grid-cols-2 gap-4 mb-5">
                            {/* new diary entry - content 1 */}
                            <FormTextArea
                                name="newDiaryEntryContentOne"
                                rows={27}
                                minLength={10}
                                maxLength={2000}
                                required={true}
                            />

                            {/* new diary entry - img 1 */}
                            <FileInputImage
                                image={uploadedImagesData.newDiaryEntryImgOne}
                                onMutate={(e) => onMutate(e, 'newDiaryEntryImgOne')}
                                inputId="newDiaryEntryImgOne"
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

                    {/* GRID ITEM TWO */}
                    {(customEntry.imageTwo || customEntry.entryContentTwo) && (
                        < div className={`grid mb-5 ${customEntry.imageTwo && customEntry.entryContentTwo ? 'lg:grid-cols-2 gap-4' : ''}`}>
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
                                    {/* new diary entry - img 2 */}
                                    <div className="order-last lg:order-first">
                                        <FileInputImage
                                            image={uploadedImagesData.newDiaryEntryImgTwo}
                                            onMutate={(e) => onMutate(e, 'newDiaryEntryImgTwo')}
                                            inputId="newDiaryEntryImgTwo"
                                        />
                                    </div>

                                    {/* new diary entry - content 2 */}
                                    <FormTextArea
                                        name="newDiaryEntryContentTwo"
                                        rows={27}
                                        minLength={10}
                                        maxLength={2000}
                                        required={false}
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