'use client';

// libraries
import {useMediaQuery} from "@react-hooks-library/core";
import {useFormik} from "formik";

// components
import {Modal , ModalHeader , ModalBody} from "@/components/modules/Modal";
import RadioBox from "@/components/modules/RadioBox";

const SortModal = ({isOpenModal, onCloseModal}) => {

    const isTablet = useMediaQuery("(min-width: 768px)");

    const formik = useFormik({
        initialValues:{
            sort: ""
        },
        // validationSchema: ,
        onSubmit: async (data) => {
            console.log(data)
        }
    });

    return (
        <Modal
            isOpenModal={isOpenModal}
            onCloseModal={onCloseModal}
            width={isTablet ? "lg" : "full"}
            position={isTablet ? "center" : "bottom"}
        >

            <ModalHeader
                title="مرتب سازی"
                onCloseModal={onCloseModal}
            />

            <ModalBody>

                <label
                    htmlFor="radiobox-popular"
                    className="flex justify-start items-center gap-x-2 w-full cursor-pointer"
                >

                    <RadioBox
                        name="sort"
                        value="popular"
                        checked={formik.values.sort.includes("popular")}
                        onChange={formik.handleChange}
                    />

                    <span className="text-xs font-bold text-dark">
                        پربازدید ترین
                    </span>

                </label>

                <label
                    htmlFor="radiobox-newest"
                    className="flex justify-start items-center gap-x-2 w-full cursor-pointer"
                >

                    <RadioBox
                        name="sort"
                        value="newest"
                        checked={formik.values.sort.includes("newest")}
                        onChange={formik.handleChange}
                    />

                    <span className="text-xs font-bold text-dark">
                        جدید ترین
                    </span>

                </label>

                <label
                    htmlFor="radiobox-expensive"
                    className="flex justify-start items-center gap-x-2 w-full cursor-pointer"
                >

                    <RadioBox
                        name="sort"
                        value="expensive"
                        checked={formik.values.sort.includes("expensive")}
                        onChange={formik.handleChange}
                    />

                    <span className="text-xs font-bold text-dark">
                        گران ترین
                    </span>

                </label>

            </ModalBody>

        </Modal>
    )
}

export default SortModal;