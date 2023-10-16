'use client';

// libraries
import {LuCheck, LuX} from "react-icons/lu";

// components
import AvatarInput from "@/components/modules/AvatarInput";

const Advertises = () => {

    return (
        <section className="flex flex-col justify-start items-start gap-y-8 w-full">

            <AvatarInput/>

            <div className="flex flex-col justify-start items-start gap-y-2 w-full">
                <span className="font-bold text-gray text-sm">
                    نام کاربری
                </span>
                <label
                    htmlFor="phoneNumber-input"
                    className="flex justify-center items-center gap-x-2 w-full bg-light rounded-lg px-4 py-2"
                >
                    <input
                        id="phoneNumber-input"
                        type="text"
                        className="w-full bg-transparent text-gray text-left font-bold focus:outline-none"
                    />
                </label>
            </div>

            <div className="flex flex-col justify-start items-start gap-y-2 w-full">
                <span className="font-bold text-gray text-sm">
                    شماره همراه
                </span>
                <label
                    htmlFor="phoneNumber-input"
                    className="flex justify-center items-center gap-x-2 w-full bg-light rounded-lg px-4 py-2"
                >
                    <input
                        id="phoneNumber-input"
                        type="text"
                        className="w-full bg-transparent text-gray text-left font-bold focus:outline-none"
                    />
                    <span className="text-gray font-bold">
                        98+
                    </span>
                </label>
            </div>

            <div className="flex justify-end items-center gap-x-2 w-full">

                <button
                    className='flex justify-center items-center gap-x-2 text-gray text-sm font-bold px-4 py-2'
                >
                     <span className="text-gray">
                        <LuX size={20}/>
                    </span>
                    انصراف
                </button>

                <button
                    className='flex justify-center items-center gap-x-2 bg-blue text-light text-sm font-bold rounded-lg px-4 py-2'
                >
                    <span className="text-light">
                        <LuCheck size={20}/>
                    </span>
                    ثبت
                </button>

            </div>

        </section>
    )
}

export default Advertises;