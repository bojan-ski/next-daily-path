import { useState } from "react";
// component
import FormSubmitBtn from "../FormSubmitBtn";
// toast
import toast from "react-hot-toast";


const DiaryEntrySearchOption = ({ getDiaryEntries, searchParam, setSearchParam }) => {
    const [disable, setDisable] = useState(false);

    const handleSearch = e => {
        e.preventDefault();

        if (searchParam == '' || searchParam.trim().length == 0) return toast.error('Please enter search term');

        setDisable(true);
        getDiaryEntries(0, searchParam.trim());
    }

    const handleReset = () => {
        setDisable(false);
        setSearchParam('');
        getDiaryEntries();
    }

    return (
        <div className="search border-b-2 pb-8 mb-10">
            <form onSubmit={handleSearch}>
                <div className="grid md:grid-cols-3 gap-5">
                    <input
                        type="text"
                        className="input input-bordered md:col-span-2"
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
        </div>
    )
}

export default DiaryEntrySearchOption