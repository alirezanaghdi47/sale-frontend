"use client";

// libraries
import ReactPagination from 'rc-pagination';
import {LuChevronLeft, LuChevronRight} from "react-icons/lu";

// styles
import "@/styles/libraries/rc-pagination.scss";

const Pagination = ({pageCount, pageSize, currentPage}) => {

    return (
        <div className="flex justify-center items-center w-full">

            <ReactPagination
                total={pageCount}
                current={currentPage}
                pageSize={pageSize}
                prevIcon={<LuChevronLeft size={20}/>}
                nextIcon={<LuChevronRight size={20}/>}
            />

        </div>
    )
}

export default Pagination;