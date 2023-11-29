'use client';

// libraries
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useFormik} from "formik";
import {LuCheck, LuSearch, LuX} from "react-icons/lu";

// components
import {Modal , ModalHeader , ModalBody , ModalFooter} from "@/components/modules/Modal";
import {Button} from "@/components/modules/Button";
import CheckBox from "@/components/modules/CheckBox";
import TextInput from "@/components/modules/TextInput";

// utils
import {cityList} from "@/utils/constants";
import {generateQueryParams} from "@/utils/functions";

const CitiesModal = ({isOpenModal, onCloseModal}) => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const formik = useFormik({
        initialValues:{
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
            router.push(`${pathname}?${query}`);
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

                <TextInput
                    name="search"
                    placeholder="جستجو"
                    color="secondary"
                    startIcon={
                        <LuSearch
                            size={20}
                            className="text-gray"
                        />
                    }
                />

                <ul className='flex flex-col justify-start items-start gap-y-4 w-full max-h-[200px] overflow-y-scroll'>

                    {
                        cityList.map(cityItem =>
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

                                <span className="text-xs font-bold text-dark">
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
                        color="gray"
                        startIcon={<LuX size={20}/>}
                        onClick={onCloseModal}
                    >
                        انصراف
                    </Button>
                }
                submitButton={
                    <Button
                        variant="contained"
                        color="blue"
                        startIcon={<LuCheck size={20}/>}
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