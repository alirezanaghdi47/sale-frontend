"use client";

// libraries
import {useMediaQuery} from "@react-hooks-library/core";
import {Toaster, toast as ReactToast} from "react-hot-toast";
import {LuCheck, LuInfo, LuX} from "react-icons/lu";

// styles
import "@/styles/customize/react-hot-toast.scss";

const getNotificationIconByStatus = (status) => {
    switch (status){
        case "success":
            return <LuCheck size={20}/>;
        case "error":
            return <LuX size={20}/>;
        case "info":
            return <LuInfo size={20}/>;
        default:
            return null;
    }
}

const getNotificationClassNameByStatus = (status) => {
    switch (status){
        case "success":
            return "react-hot-toast--success";
        case "error":
            return "react-hot-toast--error";
        case "info":
            return "react-hot-toast--info";
        default:
            return null;
    }
}

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
        icon: getNotificationIconByStatus(status),
        className: getNotificationClassNameByStatus(status)
    })
}

export default Notification;