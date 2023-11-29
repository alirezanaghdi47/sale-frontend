"use client";

// libraries
import {forwardRef, useEffect} from "react";
import dynamic from "next/dynamic";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useInView} from "react-intersection-observer";
import {useInfiniteQuery} from "@tanstack/react-query";
import {useMediaQuery} from "@react-hooks-library/core";
import {useFormik} from "formik";
import {LuArrowDownWideNarrow, LuCheck, LuFilter} from "react-icons/lu";

// components
import {Accordion, AccordionItem} from "@/components/modules/Accordion";
import {Button} from "@/components/modules/Button";
import RangeInput from "@/components/modules/RangeInput";
import CheckBox from "@/components/modules/CheckBox";
import SwitchBox from "@/components/modules/SwitchBox";
import AdvertiseCard from "@/components/partials/AdvertiseCard";

const SortModal = dynamic(() => import("@/components/partials/SortModal"), {ssr: false});
const FilterModal = dynamic(() => import("@/components/widgets/FilterModal"), {ssr: false});

// hooks
import {useModal} from "@/hooks/useModal";

// services
import {getAllAdvertiseService} from "@/services/advertiseService";

// utils
import {categoryList, sortList} from "@/utils/constants";
import {generateQueryParams} from "@/utils/functions";

const ActionBar = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const isTablet = useMediaQuery("(min-width: 768px)");

    const {
        isOpenModal: isOpenFilterModal,
        _handleHideModal: _handleHideFilterModal,
        _handleShowModal: _handleShowFilterModal
    } = useModal();

    const {
        isOpenModal: isOpenSortModal,
        _handleHideModal: _handleHideSortModal,
        _handleShowModal: _handleShowSortModal
    } = useModal();

    return (
        <section className='flex md:hidden flex-col justify-center items-start gap-y-4 w-full'>

            <div className="flex justify-between items-center gap-x-4 w-full">

                <Button
                    variant="contained"
                    color="light"
                    startIcon={<LuFilter size={20}/>}
                    onClick={_handleShowFilterModal}
                >
                    فیلتر
                </Button>

                <Button
                    variant="contained"
                    color="light"
                    startIcon={<LuArrowDownWideNarrow size={20}/>}
                    onClick={_handleShowSortModal}
                >
                    مرتب سازی
                </Button>

            </div>

            <FilterModal
                isOpenModal={isOpenFilterModal && !isTablet}
                onCloseModal={_handleHideFilterModal}
            />

            <SortModal
                sort={searchParams.get("sort")}
                _handleChangeSort={(value) => {
                    const query = generateQueryParams({
                        search: searchParams.get("search"),
                        page: searchParams.get("page"),
                        sort: value,
                        startPrice: searchParams.get("startPrice"),
                        endPrice: searchParams.get("endPrice"),
                        categories: searchParams.getAll("category"),
                        cities: searchParams.getAll("city"),
                    });
                    router.push(`${pathname}?${query}`);
                }}
                isOpenModal={isOpenSortModal && !isTablet}
                onCloseModal={_handleHideSortModal}
            />

        </section>
    )
}

const SortBar = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return (
        <div className="flex flex-col justify-start items-start gap-y-2 w-full">

            <h3 className="flex justify-start items-center gap-x-2 font-bold text-dark text-sm">
                <LuArrowDownWideNarrow size={20}/>
                مرتب سازی
            </h3>

            <div className="flex justify-start items-center gap-x-2 w-full bg-light rounded-lg p-4">

                {
                    sortList.map(sortItem =>
                        <Button
                            key={sortItem?.id}
                            size="sm"
                            variant={searchParams.get("sort") === sortItem?.value ? "contained" : "text"}
                            color={searchParams.get("sort") === sortItem?.value ? "blue" : "gray"}
                            onClick={() => {
                                const query = generateQueryParams({
                                    search: searchParams.get("search"),
                                    page: searchParams.get("page"),
                                    sort: sortItem?.value,
                                    startPrice: searchParams.get("startPrice"),
                                    endPrice: searchParams.get("endPrice"),
                                    categories: searchParams.getAll("category"),
                                    cities: searchParams.getAll("city"),
                                });
                                router.push(`${pathname}?${query}`);
                            }}
                        >
                            {sortItem?.label}
                        </Button>
                    )
                }

            </div>

        </div>
    )
}

const FilterBar = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            prices: searchParams.get("startPrice") && searchParams.get("endPrice") ? [parseInt(searchParams.get("startPrice")), parseInt(searchParams.get("endPrice"))] : [0, 100_000_000],
            categories: searchParams.getAll("category") ?? []
        },
        onSubmit: async (result) => {
            const query = generateQueryParams({
                search: searchParams.get("search"),
                page: searchParams.get("page"),
                sort: searchParams.get("sort"),
                startPrice: result.prices[0],
                endPrice: result.prices[1],
                categories: result.categories,
                cities: searchParams.getAll("city"),
            });
            router.push(`${pathname}?${query}`);
        }
    });

    return (
        <div className="flex flex-col justify-start items-start gap-y-2 w-full">

            <h3 className="flex justify-start items-center gap-x-2 font-bold text-dark text-sm">
                <LuFilter size={20}/>
                فیلتر ها
            </h3>

            <div className="flex flex-col justify-end items-center gap-y-4 w-full bg-light rounded-lg p-4">

                <Accordion>

                    <AccordionItem header="دسته بندی ها">

                        {
                            categoryList.map(categoryItem =>
                                <label
                                    key={categoryItem?.id}
                                    htmlFor={`checkbox-${categoryItem?.value}`}
                                    className="flex justify-start items-center gap-x-2 w-full cursor-pointer"
                                >

                                    <CheckBox
                                        name="categories"
                                        value={categoryItem?.value}
                                        checked={formik.values.categories.includes(categoryItem?.value)}
                                        onChange={formik.handleChange}
                                    />

                                    <span className="text-xs font-bold text-dark">
                                        {categoryItem?.label}
                                    </span>

                                </label>
                            )
                        }

                    </AccordionItem>

                    <AccordionItem header="قیمت">

                        <RangeInput
                            min={0}
                            max={100_000_000}
                            step={10_000_000}
                            values={formik.values.prices}
                            onChange={(values) => formik.setFieldValue("prices", values)}
                        />

                        <div className="flex justify-between items-center gap-x-4 w-full">

                            <span className="text-xs text-gray">
                                {formik.values.prices[1]?.toLocaleString()}
                                &nbsp;
                                تومان
                            </span>

                            <span className="text-xs text-gray">
                                {formik.values.prices[0]?.toLocaleString()}
                                &nbsp;
                                تومان
                            </span>

                        </div>

                    </AccordionItem>

                    {/*<AccordionItem header="وضعیت">*/}

                    {/*    <label*/}
                    {/*        htmlFor="switchbox-hasImage"*/}
                    {/*        className="flex justify-start items-center gap-x-2 w-full cursor-pointer"*/}
                    {/*    >*/}

                    {/*        <SwitchBox*/}
                    {/*            name="hasImage"*/}
                    {/*            value={true}*/}
                    {/*            checked={formik.values.hasImage}*/}
                    {/*            onChange={formik.handleChange}*/}
                    {/*        />*/}

                    {/*        <span className="text-xs font-bold text-dark">*/}
                    {/*            عکس دار*/}
                    {/*        </span>*/}

                    {/*    </label>*/}

                    {/*</AccordionItem>*/}

                </Accordion>

            </div>

            <div className="flex justify-end items-center gap-x-2 w-full">

                <Button
                    variant="contained"
                    color="blue"
                    startIcon={<LuCheck size={20}/>}
                    onClick={formik.handleSubmit}
                >
                    ثبت
                </Button>

            </div>

        </div>
    )
}

const Actions = () => {

    return (
        <div className='sticky top-[86px] hidden md:flex flex-col justify-start items-start gap-y-4 min-w-[280px]'>

            <SortBar/>

            <FilterBar/>

        </div>
    )
}

const AdvertiseList = forwardRef(({data}, ref) => {

    return (
        <section className='flex flex-col justify-center items-start gap-y-4 w-full'>

            <ul className="grid grid-cols-12 gap-4 w-full">

                {
                    data?.pages?.length > 0 && data?.pages?.map(page =>
                        page?.map(advertiseItem =>
                            <li
                                ref={ref}
                                key={advertiseItem?._id}
                                className="col-span-12 lg:col-span-6"
                            >
                                <AdvertiseCard
                                    advertiseItem={advertiseItem}
                                    toolbar={false}
                                />
                            </li>
                        )
                    )
                }

            </ul>

        </section>
    )
})

export const Content = forwardRef(({data}, ref) => {

    return (
        <div className="flex flex-col justify-start items-center gap-y-4 w-full">

            <ActionBar/>

            <AdvertiseList
                data={data}
                ref={ref}
            />

        </div>
    )
})

export const Advertises = () => {

    const searchParams = useSearchParams();
    const {ref, inView} = useInView();

    const {
        data, isPending, hasNextPage, fetchNextPage, isFetchingNextPage
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
            const nextPage = lastPage.length === 8 ? allPages.length + 1 : undefined;
            return nextPage;
        },
    });

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage, hasNextPage]);

    return (
        <div className="flex flex-col md:flex-row justify-start items-start gap-4 w-full">

            {
                !isPending && (
                    <Actions data={data}/>
                )
            }

            {
                !isPending && (
                    <Content
                        data={data}
                        ref={ref}
                    />
                )
            }

        </div>
    )
}