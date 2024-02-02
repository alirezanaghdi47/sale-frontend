"use client";

// libraries
import {useQuery} from "@tanstack/react-query";

// components
import {PaginationPlaceholder , AdvertiseListPlaceholder , SortBarPlaceholder} from "@/components/partials/Placeholders";
import {FavoriteListEmpty} from "@/components/partials/Empties";
import SortBar from "@/components/widgets/favorites/SortBar";
import AdvertiseList from "@/components/widgets/favorites/AdvertiseList";

// modules
import Pagination from "@/modules/Pagination";

// hooks
import {useFilter} from "@/hooks/useFilter";

// services
import {getAllFavoriteService} from "@/services/favoriteService";

const Content = () => {

    const {page, limit, sort, _handleChangePage, _handleChangeSort} = useFilter(6);

    const {isPending, data , error} = useQuery({
        queryKey: ['allFavorite', {page, limit, sort}],
        queryFn: () => getAllFavoriteService({page, limit, sort})
    });

    return (
        <div className={`flex flex-col justify-start items-center gap-y-4 w-full h-full ${!isPending && (error || data?.data?.length === 0) && "my-auto"}`}>

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
                    <FavoriteListEmpty/>
                )
            }

        </div>
    )
}

export default Content;