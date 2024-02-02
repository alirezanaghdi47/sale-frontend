"use client";

// libraries
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useFormik} from "formik";
import {LuArrowDownWideNarrow, LuCheck, LuFilter, LuX} from "react-icons/lu";

// modules
import {Accordion, AccordionItem} from "@/modules/Accordion";
import {Button} from "@/modules/Button";
import RangeInput from "@/modules/RangeInput";
import CheckBox from "@/modules/CheckBox";

// utils
import {categoryList, sortList} from "@/utils/constants";
import {generateQueryParams} from "@/utils/functions";

const SortBar = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return (
        <div className="flex flex-col justify-start items-start gap-y-2 w-full">

            <h3 className="flex justify-start items-center gap-x-2 font-bold text-dark text-xs">
                <LuArrowDownWideNarrow
                    size={16}
                    className="text-current"
                />
                مرتب سازی
            </h3>

            <div className="flex justify-start items-center gap-x-2 w-full bg-light rounded-lg p-2">

                {
                    sortList.map(sortItem =>
                        <Button
                            key={sortItem?.id}
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
            startPrice: searchParams.get("startPrice") ? parseInt(searchParams.get("startPrice") as string) : 0,
            endPrice: searchParams.get("endPrice") ? parseInt(searchParams.get("endPrice") as string) : 100_000_000,
            categories: searchParams.getAll("category") ?? []
        },
        onSubmit: async (result) => {
            const query = generateQueryParams({
                search: searchParams.get("search"),
                page: searchParams.get("page"),
                sort: searchParams.get("sort"),
                startPrice: result.startPrice,
                endPrice: result.endPrice,
                categories: result.categories,
                cities: searchParams.getAll("city"),
            });
            router.push(`${pathname}?${query}`);
        }
    });

    return (
        <div className="flex flex-col justify-start items-start gap-y-2 w-full">

            <h3 className="flex justify-start items-center gap-x-2 font-bold text-dark text-xs">
                <LuFilter
                    size={16}
                    className="text-current"
                />
                فیلتر ها
            </h3>

            <div className="flex flex-col justify-end items-center gap-y-4 w-full bg-light rounded-lg p-2">

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

                                    <span className="text-xs text-dark">
                                        {categoryItem?.label}
                                    </span>

                                </label>
                            )
                        }

                    </AccordionItem>

                    <AccordionItem header="قیمت ( تومان )">

                        <RangeInput
                            min={0}
                            max={100_000_000}
                            step={10_000_000}
                            values={[formik.values.startPrice, formik.values.endPrice]}
                            onChange={(values) => {
                                // @ts-ignore
                                formik.setFieldValue("startPrice", values[0]);
                                // @ts-ignore
                                formik.setFieldValue("endPrice", values[1]);
                            }}
                        />

                        <div className="flex justify-between items-center gap-x-4 w-full">

                            <span className="text-xs text-gray">
                                {formik.values.endPrice?.toLocaleString()}
                            </span>

                            <span className="text-xs text-gray">
                                {formik.values.startPrice?.toLocaleString()}
                            </span>

                        </div>

                    </AccordionItem>

                </Accordion>

            </div>

            <div className="flex justify-end items-center gap-x-2 w-full">

                {
                    (searchParams.getAll("category").length > 0 || searchParams.get("startPrice") || searchParams.get("endPrice")) && (
                        <Button
                            variant="text"
                            color="red"
                            startIcon={
                                <LuX
                                    size={16}
                                    className="text-current"
                                />
                            }
                            onClick={() => {
                                const query = generateQueryParams({
                                    search: searchParams.get("search"),
                                    page: searchParams.get("page"),
                                    sort: searchParams.get("sort"),
                                    startPrice: 0,
                                    endPrice: 0,
                                    categories: [],
                                    cities: searchParams.getAll("city"),
                                });
                                router.push(`${pathname}?${query}`);
                            }}
                        >
                            حذف فیلتر ها
                        </Button>
                    )
                }

                <Button
                    variant="contained"
                    color="blue"
                    startIcon={
                        <LuCheck
                            size={16}
                            className="text-current"
                        />
                    }
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
        <div className='sticky top-[86px] hidden md:flex flex-col justify-start items-start gap-y-4 min-w-[240px]'>
            <SortBar/>
            <FilterBar/>
        </div>
    )
}

export default Actions;