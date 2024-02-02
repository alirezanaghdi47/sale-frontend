// @ts-nocheck

"use client";

// libraries
import {useEffect} from "react";
import {useSearchParams} from "next/navigation";
import {useInView} from "react-intersection-observer";
import {useInfiniteQuery} from "@tanstack/react-query";

// components
import {AdvertiseListEmpty} from "@/components/partials/Empties";
import Actions from "@/components/widgets/advertises/Actions";
import ActionBar from "@/components/widgets/advertises/ActionBar";
import AdvertiseList from "@/components/widgets/advertises/AdvertiseList";

// services
import {getAllAdvertiseService} from "@/services/advertiseService";

const Content = () => {

    const searchParams = useSearchParams();
    const {ref, inView} = useInView();

    const {
        data,
        isPending,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
        error,
    } = useInfiniteQuery({
        queryKey: ['allAdvertise', {
            sort: searchParams.get("sort"),
            search: searchParams.get("search"),
            startPrice: searchParams.get("startPrice"),
            endPrice: searchParams.get("endPrice"),
            city: searchParams.getAll("city"),
            category: searchParams.getAll("category")
        }],
        queryFn: ({pageParam = 1}) => getAllAdvertiseService({
            page: pageParam,
            sort: searchParams.get("sort"),
            search: searchParams.get("search"),
            startPrice: searchParams.get("startPrice"),
            endPrice: searchParams.get("endPrice"),
            city: searchParams.getAll("city"),
            category: searchParams.getAll("category")
        }),
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length === 6 ? allPages.length + 1 : undefined;
            return nextPage;
        },
    });

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage, hasNextPage]);

    return (
        <div className="flex flex-col md:flex-row justify-start items-start gap-4 w-full h-full">

            {
                !isPending && (
                    <Actions data={data}/>
                )
            }

            {
                !isPending && data?.pages[0].length > 0 && (

                    <div className="flex flex-col justify-start items-center gap-y-4 w-full">

                        <ActionBar/>

                        <AdvertiseList
                            data={data}
                            ref={ref}
                        />

                        {
                            !hasNextPage && (
                                <span className="text-xs font-bold text-gray py-4">
                                    داده ی دیگری وجود ندارد
                                </span>
                            )
                        }

                    </div>
                )
            }

            {
                !isPending && (error || data?.pages[0].length === 0) && (
                    <AdvertiseListEmpty/>
                )
            }

        </div>
    )
}

export default Content;