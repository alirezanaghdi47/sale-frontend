// libraries
import {useState} from "react";

export const useFilter = () => {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const [sort, setSort] = useState("newest");

    const _handleChangePage = (page) => setPage(page);

    const _handleChangeSort = (sort) => setSort(sort);

    return {
        page,
        sort,
        limit,
        _handleChangePage,
        _handleChangeSort
    }

}

