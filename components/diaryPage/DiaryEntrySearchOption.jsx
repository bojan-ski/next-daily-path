import { useState } from "react"

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
        <section className="search border-b-2 pb-7 mb-10">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    className="input input-bordered w-full max-w-4xl me-4"
                    value={searchParam}
                    onChange={e => setSearchParam(e.target.value)}
                    disabled={disable}
                    placeholder="Type here"
                />

                {disable ? (
                    <button type="button" className="fw-bold btn btn-warning w-100 text-white" onClick={handleReset}>
                        Reset
                    </button>
                ) : (
                    <button type="submit" className="bg-orange-300 rounded-md px-5 py-2 font-bold hover:bg-orange-400">
                        Search
                    </button>
                )}
            </form>
        </section>
    )
}

export default DiaryEntrySearchOption