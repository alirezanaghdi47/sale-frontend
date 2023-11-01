'use client';

// libraries
import {useMediaQuery} from "@react-hooks-library/core";
import {useFormik} from "formik";
import {LuCheck, LuSearch, LuX} from "react-icons/lu";

// components
import {Modal , ModalHeader , ModalBody , ModalFooter} from "@/components/modules/Modal";
import {Button} from "@/components/modules/Button";
import CheckBox from "@/components/modules/CheckBox";
import TextInput from "@/components/modules/TextInput";

// utils
import {cityList} from "@/utils/constants";

const CityItem = ({cityItem , formik}) => {

    return (
        <label
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
                {cityItem.title}
            </span>

        </label>
    )
}

const CityList = () => {

    const formik = useFormik({
        initialValues:{
            cities: []
        },
        // validationSchema: ,
        onSubmit: async (data) => {
            console.log(data)
        }
    });

    return (
        <ul className='flex flex-col justify-start items-start gap-y-4 w-full max-h-[200px] overflow-y-scroll'>

            {
                cityList.map(cityItem =>
                    <CityItem
                        key={cityItem.id}
                        cityItem={cityItem}
                        formik={formik}
                    />
                )
            }

        </ul>
    )
}

const CitiesModal = ({isOpenModal, onCloseModal}) => {

    const isTablet = useMediaQuery("(min-width: 768px)");

    return (
        <Modal
            isOpenModal={isOpenModal}
            onCloseModal={onCloseModal}
            width={isTablet ? "md" : "full"}
            position={isTablet ? "center" : "bottom"}
        >

            <ModalHeader
                title="شهر محل سکونت"
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

                <CityList/>

            </ModalBody>

            <ModalFooter
                cancelButton={
                    <Button
                        variant="text"
                        color="gray"
                        startIcon={<LuX size={20}/>}
                    >
                        انصراف
                    </Button>
                }
                submitButton={
                    <Button
                        variant="contained"
                        color="blue"
                        startIcon={<LuCheck size={20}/>}
                    >
                        ثبت
                    </Button>
                }
            />

        </Modal>
    )
}

export default CitiesModal;