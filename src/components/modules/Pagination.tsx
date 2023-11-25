// libraries
import ReactPagination from 'rc-pagination';
import {LuChevronLeft, LuChevronRight} from "react-icons/lu";

// styles
import "@/styles/customize/rc-pagination.scss";

const Pagination = ({pageCount, pageSize, currentPage , onChange}) => {

    return (
        <ReactPagination
            total={pageCount}
            current={currentPage}
            pageSize={pageSize}
            showLessItems={true}
            onChange={(page, pageSize) => onChange(page)}
            prevIcon={<LuChevronLeft size={20}/>}
            nextIcon={<LuChevronRight size={20}/>}
        />
    )
}

export default Pagination;