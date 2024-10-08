'use client';

// libraries
import {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {useFormik} from "formik";
import {LuCheck, LuX} from "react-icons/lu";

// modules
import {Modal, ModalHeader, ModalBody, ModalFooter} from "@/modules/Modal";
import {Button} from "@/modules/Button";
import CheckBox from "@/modules/CheckBox";
import SearchInput from "@/modules/SearchInput";

// types
import {CitiesModalType} from "@/types/components";

// utils
import {cityList} from "@/utils/constants";
import {generateQueryParams} from "@/utils/functions";

const CitiesModal = ({isOpenModal, onCloseModal}: CitiesModalType) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const [search, setSearch] = useState("");
    const regex = new RegExp(search, "g");

    const formik = useFormik({
        initialValues: {
            cities: searchParams.getAll("city") ?? []
        },
        onSubmit: async (result) => {
            const query = generateQueryParams({
                search: searchParams.get("search"),
                page: searchParams.get("page"),
                sort: searchParams.get("sort"),
                startPrice: searchParams.get("startPrice"),
                endPrice: searchParams.get("endPrice"),
                categories: searchParams.getAll("category"),
                cities: result.cities,
            });
            router.push(`${process.env.BASE_URL}/advertises?${query}`);
            onCloseModal();
        }
    });

    return (
        <Modal
            isOpenModal={isOpenModal}
            onCloseModal={onCloseModal}
            position="center"
        >

            <ModalHeader
                title="استان محل سکونت"
                onCloseModal={onCloseModal}
            />

            <ModalBody>

                <SearchInput
                    name="search"
                    value={search}
                    onChange={(value: string) => setSearch(value)}
                />

                <ul className='flex flex-col justify-start items-start gap-y-4 w-full max-h-[200px] overflow-y-scroll'>

                    {
                        cityList.filter(item => item.label.match(regex)).map(cityItem =>
                            <label
                                key={cityItem.id}
                                htmlFor={`checkbox-${cityItem.value}`}
                                className="flex justify-start items-center gap-x-2 w-full cursor-pointer"
                            >

                                <CheckBox
                                    name="cities"
                                    value={cityItem.value}
                                    checked={formik.values.cities.includes(cityItem.value)}
                                    onChange={formik.handleChange}
                                />

                                <span className="text-xs text-dark">
                                    {cityItem.label}
                                </span>

                            </label>
                        )
                    }

                </ul>

            </ModalBody>

            <ModalFooter
                cancelButton={
                    <Button
                        variant="text"
                        color="red"
                        startIcon={
                            <LuX
                                size={16}
                                className="text-current"
                            />
                        }
                        onClick={onCloseModal}
                    >
                        انصراف
                    </Button>
                }
                submitButton={
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
                }
            />

        </Modal>
    )
}

export default CitiesModal;