"use client";

// libraries
import {useQuery} from "@tanstack/react-query";

// components
import {PaginationPlaceholder, AdvertiseListPlaceholder, SortBarPlaceholder} from "@/components/partials/Placeholders";
import {MyAdvertiseListEmpty} from "@/components/partials/Empties";
import SortBar from "@/components/widgets/my-advertise/SortBar";
import AdvertiseList from "@/components/widgets/my-advertise/AdvertiseList";

// modules
import Pagination from "@/modules/Pagination";

// hooks
import {useFilter} from "@/hooks/useFilter";

// services
import {getAllMyAdvertiseService} from "@/services/myAdvertiseService";

const Content = () => {

    const {page, limit, sort, _handleChangePage, _handleChangeSort} = useFilter(6);

    const {isPending, data, error} = useQuery({
        queryKey: ['allMyAdvertise', {page, limit, sort}],
        queryFn: () => getAllMyAdvertiseService({page, limit, sort})
    });

    return (
        <div
            className={`flex flex-col justify-start items-center gap-y-4 w-full h-full ${!isPending && (error || data?.data?.length === 0) && "my-auto"}`}>

            {
                !isPending && data?.data?.length > 0 && (
                    <SortBar
                        totalCount={data?.totalCount}
                        sort={sort}
                        _handleChangeSort={(value) => _handleChangeSort(value)}
                    />
                )
            }

            {
                !isPending && data?.data?.length > 0 && (
                    <AdvertiseList data={data?.data}/>
                )
            }

            {
                !isPending && data?.totalCount > limit && (
                    <Pagination
                        currentPage={page}
                        pageCount={data?.totalCount}
                        pageSize={limit}
                        onChange={(value) => _handleChangePage(value)}
                    />
                )
            }

            {
                isPending && (
                    <SortBarPlaceholder/>
                )
            }

            {
                isPending && (
                    <AdvertiseListPlaceholder/>
                )
            }

            {
                isPending && (
                    <PaginationPlaceholder/>
                )
            }

            {
                !isPending && (error || data?.data?.length === 0) && (
                    <MyAdvertiseListEmpty/>
                )
            }

        </div>
    )
}

export default Content;