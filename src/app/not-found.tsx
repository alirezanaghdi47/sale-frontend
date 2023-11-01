"use client";

// libraries
import Image from "next/image";
import {LuChevronRight} from "react-icons/lu";

// components
import {LinkButton} from "@/components/modules/Button";

const NotFound = () => {

    return (
        <div className="flex flex-col justify-center items-center gap-y-4 w-full p-4">

            <Image
                src="/assets/images/not-found.svg"
                alt="not-found"
                width={200}
                height={200}
                className="max-w-[200px] max-h-[200px] object-center object-cover"
            />

            <h1 className="text-gray text-lg font-bold mt-2">
                صفحه مورد نظر یافت نشد
            </h1>

            <LinkButton
                variant="contained"
                color="blue"
                href="/"
            >
                <span className="text-light">
                    <LuChevronRight size={20}/>
                </span>
                بازگشت به خانه
            </LinkButton>

        </div>
    )
}

export default NotFound;