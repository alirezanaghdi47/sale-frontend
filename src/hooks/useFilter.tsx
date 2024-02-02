// libraries
import {useState} from "react";

export const useFilter = (offset: number) => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(offset);
    const [sort, setSort] = useState("newest");

    const _handleChangePage = (page: number) => setPage(page);

    const _handleChangeSort = (sort: string) => setSort(sort);

    return {page, sort, limit, _handleChangePage, _handleChangeSort}
}

