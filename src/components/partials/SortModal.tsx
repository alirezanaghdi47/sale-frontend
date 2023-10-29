'use client';

// libraries
import {useFormik} from "formik";

// components
import {Modal , ModalHeader , ModalBody} from "@/components/modules/Modal";
import RadioBox from "@/components/modules/RadioBox";

const SortModal = ({isOpenModal, onCloseModal}) => {

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
            // className="flex flex-col justify-start items-center gap-y-4 w-full h-max md:max-w-md bg-light rounded-tl-lg rounded-tr-lg md:rounded-lg p-4"
            // overlayClassName="fixed top-0 left-0 z-30 flex justify-end items-end md:justify-center md:items-center w-full h-full bg-gray/75 md:p-4"
        >

            <ModalHeader
                title="مرتب سازی"
                onCloseModal={onCloseModal}
            />

            <ModalBody>

                <RadioBox
                    title="جدید ترین"
                    name="sort"
                    value="newest"
                    checked={formik.values.sort === "newest"}
                    onChange={(value) => formik.setFieldValue("sort" , value)}
                />

                <RadioBox
                    title="گران ترین"
                    name="sort"
                    value="expensive"
                    checked={formik.values.sort === "expensive"}
                    onChange={(value) => formik.setFieldValue("sort" , value)}
                />

            </ModalBody>

        </Modal>
    )
}

export default SortModal;