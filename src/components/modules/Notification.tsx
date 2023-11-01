"use client";

// libraries
import {useMediaQuery} from "@react-hooks-library/core";
import {Toaster} from "react-hot-toast";
import {LuCheck, LuX} from "react-icons/lu";

// styles
import "@/styles/addon/react-hot-toast.scss";

const Notification = () => {

    const isTablet = useMediaQuery("(min-width: 768px)");

    return (
        <Toaster
            position={isTablet ? "bottom-left" : "top-center"}
            reverseOrder={false}
            gutter={8}
            toastOptions={{
                duration: 2000,
                success:{
                    className: "react-hot-toast--success",
                    icon: <LuCheck size={20}/>
                },
                error:{
                    className: "react-hot-toast--error",
                    icon: <LuX size={20}/>
                }
            }}
            containerStyle={{
                top: isTablet ? 0 : 86,
                bottom: isTablet ? 16 : 0,
                right: isTablet ? 16 : 0,
            }}
        />
    )
}

export default Notification;