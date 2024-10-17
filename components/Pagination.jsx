// utils
import scrollToTop from "@/utils/scrollToTop";
// icons
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const Pagination = ({ page, getPageContentData }) => {
    return (
        <div className="flex justify-center mt-10">
            <button
                className="btn bg-orange-300 hover:bg-orange-400 text-white px-7 mx-5"
                onClick={() => {
                    getPageContentData(page - 1)
                    scrollToTop()
                }}
                disabled={page === 0}
            >
                <GrLinkPrevious size={24} />
            </button>
            <button
                className="btn bg-orange-300 hover:bg-orange-400 text-white px-7 mx-5"
                onClick={() => {
                    getPageContentData(page + 1)
                    scrollToTop()
                }}
            >
                <GrLinkNext size={24} />
            </button>
        </div>
    )
}

export default Pagination