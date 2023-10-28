'use client';

// libraries
import Modal from "react-modal";
import {useFormik} from "formik";
import {LuX} from "react-icons/lu";

// components
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
            isOpen={isOpenModal}
            onRequestClose={onCloseModal}
            ariaHideApp={false}
            className="flex flex-col justify-start items-center gap-y-4 w-full h-max md:max-w-md bg-secondary rounded-tl-lg rounded-tr-lg md:rounded-lg p-4"
            overlayClassName="fixed top-0 left-0 z-30 flex justify-end items-end md:justify-center md:items-center w-full h-full bg-gray/75 md:p-4"
        >

            <div className="flex justify-between items-center w-full gap-x-4">

                <h3 className="text-dark font-bold">
                    مرتب سازی
                </h3>

                <button
                    className='text-red p-2'
                    onClick={onCloseModal}
                >
                    <LuX size={20}/>
                </button>

            </div>

            <RadioBox
                title="جدید ترین"
                name="categories"
                value={formik.values.sort}
                onChange={(value) => formik.setFieldValue("sort" , value)}
            />

            <RadioBox
                title="گران ترین"
                name="categories"
                value={formik.values.sort}
                onChange={(value) => formik.setFieldValue("sort" , value)}
            />

        </Modal>
    )
}

export default SortModal;