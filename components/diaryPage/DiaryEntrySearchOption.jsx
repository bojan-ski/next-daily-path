import { useState } from "react"
import FormSubmitBtn from "../FormSubmitBtn"

const DiaryEntrySearchOption = ({ getDiaryEntries, searchParam, setSearchParam }) => {
    const [disable, setDisable] = useState(false)

    const handleSearch = e => {
        e.preventDefault()
        if (searchParam == '' || searchParam.trim().length == 0) return console.log('please enter search term');
        setDisable(true)
        getDiaryEntries(0, searchParam.trim())
    }

    const handleReset = () => {
        setDisable(false)
        setSearchParam('')
        getDiaryEntries()
    }

    return (
        <section className="search border-b-2 pb-8 mb-10">
            <form onSubmit={handleSearch}>
                <div className="grid lg:grid-cols-2 gap-5">
                    <input
                        type="text"
                        className="input input-bordered"
                        value={searchParam}
                        onChange={e => setSearchParam(e.target.value)}
                        disabled={disable}
                        placeholder="Enter search term"
                    />

                    {disable ? (
                        <button
                            type="button"
                            className="btn bg-amber-300 hover:bg-amber-400 text-lg font-bold border-0 w-full text-white"
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    ) : (
                        <FormSubmitBtn btnTitle='Submit' />
                    )}
                </div>
            </form>
        </section>
    )
}

export default DiaryEntrySearchOption