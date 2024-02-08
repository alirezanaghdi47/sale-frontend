"use client";

// libraries
import {useMediaQuery} from "@react-hooks-library/core";
import {Toaster} from "react-hot-toast";
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
                duration: 1500,
                className: "react-hot-toast",
                success: {
                    icon: <LuCheck color="currentColor" size={20}/>,
                    className: "react-hot-toast--success"
                },
                error:{
                    icon: <LuX color="currentColor" size={20}/>,
                    className: "react-hot-toast--error"
                }
            }}
            containerStyle={{
                bottom: isTablet ? 16 : 86,
            }}
        />
    )
}

export default Notification;