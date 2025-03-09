// utils
import scrollToTop from "@/utils/scrollToTop";
// icons
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";


const Pagination = ({ page, getPageContentData, isLoading }) => {
    return (
        <div className="pagination flex justify-center">
            <button
                className="btn bg-orange-300 hover:bg-orange-400 text-white px-7 mx-5"
                onClick={() => {
                    getPageContentData(page - 1)
                    scrollToTop()
                }}
                disabled={isLoading || page === 0}
            >
                <GrLinkPrevious size={24} />
            </button>
            
            <button
                className="btn bg-orange-300 hover:bg-orange-400 text-white px-7 mx-5"
                onClick={() => {
                    getPageContentData(page + 1)
                    scrollToTop()
                }}
                disabled={isLoading}
            >
                <GrLinkNext size={24} />
            </button>
        </div>
    )
}

export default Pagination