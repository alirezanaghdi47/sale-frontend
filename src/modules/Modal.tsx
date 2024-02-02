// libraries
import {useEffect} from "react";
import ReactModal from "react-modal";
import {LuX} from "react-icons/lu";

// modules
import {IconButton} from "@/modules/IconButton";

// styles
import "@/styles/customize/react-modal.scss";

// types
import {ModalBodyType, ModalFooterType, ModalHeaderType, ModalType} from "@/types/modules";

const styles = {
    width: {
        sm: "w-full md:w-[320px]",
        md: "w-full md:w-[480px]",
        lg: "w-full md:w-[640px]",
        full: "w-full"
    },
    height: {
        content: "h-max",
        full: "h-full"
    },
    position: {
        center: "justify-center items-center p-4",
        bottom: "justify-center items-end",
        any: "justify-center items-center",
    }
}

export const Modal = ({children, isOpenModal, onCloseModal, width = "md", height = "content", position = "any"}: ModalType) => {

    // @ts-ignore
    useEffect(() => {
        if (isOpenModal) document.body.style.overflowY = "hidden";
        return () => document.body.style.overflowY = "scroll";
    }, [isOpenModal]);

    return (
        <ReactModal
            isOpen={isOpenModal}
            onRequestClose={onCloseModal}
            ariaHideApp={false}
            closeTimeoutMS={300}
            className={`flex flex-col justify-start items-center gap-y-4 ${styles.width[width]} ${styles.height[height]} ${position === "any" && "rounded-none"}  ${position === "center" && "rounded-lg"} ${position === "bottom" && "rounded-tl-lg rounded-tr-lg"} bg-light p-4`}
            overlayClassName={`fixed top-0 left-0 z-30 flex ${styles.position[position]} ${position === "center" && "p-4"} w-full h-full bg-gray/75`}
        >
            {children}
        </ReactModal>
    )
}

export const ModalHeader = ({title, onCloseModal}: ModalHeaderType) => {

    return (
        <div className="flex justify-between items-center w-full gap-x-4">

            <h3 className="text-sm text-dark font-bold">
                {title}
            </h3>

            <IconButton
                variant="contained"
                color="red"
                onClick={onCloseModal}
            >
                <LuX size={16}/>
            </IconButton>

        </div>
    )
}

export const ModalBody = ({children, center , className}: ModalBodyType) => {

    return (
        <div className={`flex flex-col justify-start items-center gap-y-4 w-full h-max overflow-y-scroll remove-scrollbar ${center && "my-auto"} ${className ?? ""}`}>
            {children}
        </div>
    )
}

export const ModalFooter = ({cancelButton, submitButton}: ModalFooterType) => {

    return (
        <div className="flex justify-end items-center gap-x-2 w-full mt-auto">
            {cancelButton}
            {submitButton}
        </div>
    )
}