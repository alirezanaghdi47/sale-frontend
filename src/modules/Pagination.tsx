// libraries
import ReactPagination from 'rc-pagination';
import {LuChevronLeft, LuChevronRight} from "react-icons/lu";

// styles
import "@/styles/customize/rc-pagination.scss";

// types
import {PaginationType} from "@/types/modules";

const Pagination = ({pageCount, pageSize, currentPage, onChange}: PaginationType) => {

    return (
        <ReactPagination
            total={pageCount}
            current={currentPage}
            pageSize={pageSize}
            showLessItems={true}
            onChange={(page, pageSize) => onChange(page)}
            prevIcon={
                <LuChevronLeft
                    size={16}
                    className="text-current"
                />
            }
            nextIcon={
                <LuChevronRight
                    size={16}
                    className="text-current"
                />
            }
        />
    )
}

export default Pagination;