const DiaryEntriesPagination = ({page, getDiaryEntries}) => {
    return (
        <div className="flex justify-center mt-10">
            <button
                className="btn btn-accent text-white px-7 mx-5"
                onClick={() => getDiaryEntries(page - 1)}
                disabled={page === 0}
            >
                Prev
            </button>
            <button
                className="btn btn-accent text-white px-7 mx-5"
                onClick={() => getDiaryEntries(page + 1)}
            >
                Next
            </button>
        </div>
    )
}

export default DiaryEntriesPagination