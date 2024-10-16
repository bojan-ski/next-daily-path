import Image from "next/image"

const DiaryEntry = ({ entry }) => {
    // console.log(entry);
    
    return (
        <div key={entry.id} className="mb-10">
            <div className="flex items-center justify-between mb-7">
                <h2 className="text-4xl text-black font-bold text-center capitalize">
                    {entry.data.newDiaryEntryTitle}
                </h2>

                <p className="text-black font-bold">
                    {entry.data.listingCreated}
                </p>
            </div>

            {entry.data.diaryEntryImgOneUrl ? (
                <div className="grid lg:grid-cols-2 gap-4 mb-5">
                    <p className="text-black mb-5">
                        {entry.data.newDiaryEntryContentOne}
                    </p>
                    <div className="relative h-96 lg:h-full">
                        <Image src={entry.data.diaryEntryImgOneUrl} alt="diary-entry-img-one" className="object-cover" fill />
                    </div>
                </div>
            ) : (
                <p className="text-black mb-5">
                    {entry.data.newDiaryEntryContentOne}
                </p>
            )}

            {entry.data.newDiaryEntryContentTwo && (
                <>
                    {entry.data.diaryEntryImgTwoUrl ? (
                        <div className="grid lg:grid-cols-2 gap-4 mb-5">
                            <div className="relative h-96 lg:h-full order-last lg:order-first">
                                <Image src={entry.data.diaryEntryImgTwoUrl} alt="diary-entry-img-two" className="object-cover" fill />
                            </div>
                            <p className="text-black">
                                {entry.data.newDiaryEntryContentOne}
                            </p>
                        </div>
                    ) : (
                        <p className="text-black">
                            {entry.data.newDiaryEntryContentTwo}
                        </p>
                    )}
                </>
            )}
        </div>
    )
}

export default DiaryEntry