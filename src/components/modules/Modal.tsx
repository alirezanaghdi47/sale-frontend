// libraries
import {useEffect} from "react";
import ReactModal from "react-modal";
import {LuCheck, LuX} from "react-icons/lu";

// styles
import "@/styles/customize/react-modal.scss";

export const Modal = ({children , isOpenModal, onCloseModal}) => {

    useEffect(() => {

        if (isOpenModal) document.body.style.overflowY = "hidden";

        return () => document.body.style.overflowY = "scroll";

    }, [isOpenModal]);

    return (
        <ReactModal
            isOpen={isOpenModal}
            onRequestClose={onCloseModal}
            ariaHideApp={false}
            className="flex flex-col justify-start items-center gap-y-4 w-full h-max md:max-w-md bg-light rounded-tl-lg rounded-tr-lg md:rounded-lg p-4"
            overlayClassName="fixed top-0 left-0 z-30 flex justify-end items-end md:justify-center md:items-center w-full h-full bg-gray/75 md:p-4"
        >
            {children}
        </ReactModal>
    )
}

export const ModalHeader = ({title , onCloseModal}) => {

    return (
        <div className="flex justify-between items-center w-full gap-x-4">

            <h3 className="text-dark font-bold">
                {title}
            </h3>

            <button
                className='text-red p-2'
                onClick={onCloseModal}
            >
                <LuX size={20}/>
            </button>

        </div>
    )
}

export const ModalBody = ({children}) => {
    return children;
}

export const ModalFooter = () => {

    return (
        <div className="flex justify-end items-center gap-x-2 w-full mt-auto">

            <button
                className='flex justify-center items-center gap-x-2 text-gray text-sm font-bold px-4 py-2'
                // onClick={onCloseModal}
            >
                <LuX
                    size={20}
                    className='text-current'
                />
                انصراف
            </button>

            <button
                className='flex justify-center items-center gap-x-2 bg-blue text-light text-sm font-bold rounded-lg px-4 py-2'
                // onClick={onCloseModal}
            >
                <LuCheck
                    size={20}
                    className='text-current'
                />
                ثبت
            </button>

        </div>
    )
}