"use client";

// libraries
import {useMediaQuery} from "@react-hooks-library/core";
import {Toaster, toast as ReactToast} from "react-hot-toast";
import {LuCheck, LuX} from "react-icons/lu";

// styles
import "@/styles/customize/react-hot-toast.scss";

const Notification = () => {

    const isTablet = useMediaQuery("(min-width: 768px)");

    return (
        <Toaster
            position="bottom-center"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
                duration: 2000
            }}
            containerStyle={{
                bottom: isTablet ? 16 : 86,
            }}
        />
    )
}

export const notification = (message, status) => {
    return ReactToast(message, {
        icon: status === "success" ? <LuCheck size={20}/> : <LuX size={20}/>,
        className: status === "success" ? "react-hot-toast--success" : "react-hot-toast--error"
    })
}

export default Notification;