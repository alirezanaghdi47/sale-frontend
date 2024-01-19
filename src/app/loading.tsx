"use client";

// libraries
import {BeatLoader} from "react-spinners";

const Loading = () => {

    return (
        <div className="flex flex-col justify-center items-center gap-y-4 w-full p-4">

            <BeatLoader
                size={16}
                color="#2563eb"
            />

            <h1 className="text-base text-gray font-bold">
                لطفا کمی صبر کنید
            </h1>

        </div>
    )
}

export default Loading;