// libraries
import {useEffect} from "react";
import ReactModal from "react-modal";

// styles
import "@/styles/customize/react-modal.scss";

export const Dialog = ({children, isOpenDialog, onCloseDialog}) => {

    useEffect(() => {

        if (isOpenDialog) document.body.style.overflowY = "hidden";

        return () => document.body.style.overflowY = "scroll";

    }, [isOpenDialog]);

    return (
        <ReactModal
            isOpen={isOpenDialog}
            onRequestClose={onCloseDialog}
            ariaHideApp={false}
            closeTimeoutMS={300}
            className={`flex flex-col justify-start items-center gap-y-8 w-max h-max rounded-lg bg-light px-16 py-8`}
            overlayClassName={`fixed top-0 left-0 z-30 flex justify-center items-center w-full h-full bg-gray/75 p-4`}
        >
            {children}
        </ReactModal>
    )
}

export const DialogBody = ({children}) => {

    return (
        <div className="flex flex-col justify-start items-center gap-y-4 w-full h-max">
            {children}
        </div>
    )
}

export const DialogFooter = ({cancelButton, submitButton}) => {

    return (
        <div className="flex justify-center items-center gap-x-2 w-full">

            {cancelButton}

            {submitButton}

        </div>
    )
}