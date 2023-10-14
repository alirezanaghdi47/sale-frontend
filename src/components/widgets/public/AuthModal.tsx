'use client';

// libraries
import Dialog from "rc-dialog";
import {useToggle} from "@react-hooks-library/core";
import Checkbox from "rc-checkbox";
import {LuCheck, LuX, LuPhone, LuRefreshCw, LuLayers} from "react-icons/lu";

// hooks
import {useSegment} from "@/hooks/useSegment";

// styles
import "rc-checkbox/assets/index.css";
import "@/styles/libraries/rc-checkbox.scss";

const FirstSegment = ({onNext , onCancel}) => {

    const {bool: toggleCheckbox , toggle:_handleToggleCheckbox} = useToggle();

    return (
        <>
            <div className="flex flex-col justify-start items-start gap-y-2 w-full">
                <span className="font-bold text-gray text-sm">
                    شماره همراه
                </span>
                <label
                    htmlFor="phoneNumber-input"
                    className="flex justify-center items-center gap-x-2 w-full bg-secondary rounded-lg px-4 py-2"
                >
                      <span className="text-gray">
                        <LuPhone size={20}/>
                    </span>
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

            <div
                className="flex justify-start items-center w-full mt-auto cursor-pointer"
                onClick={_handleToggleCheckbox}
            >

                <Checkbox
                    name="confirm"
                    checked={toggleCheckbox}
                />

                <span className="text-gray text-sm font-bold">
                    تمامی قوانین سایت را می پذیرم
                </span>

            </div>

            <div className="flex justify-end items-center gap-x-2 w-full">

                <button
                    className='flex justify-center items-center gap-x-2 text-gray text-sm font-bold px-4 py-2'
                    onClick={onCancel}
                >
                     <span className="text-gray">
                        <LuX size={20}/>
                    </span>
                    انصراف
                </button>

                <button
                    className='flex justify-center items-center gap-x-2 bg-blue text-light text-sm font-bold rounded-lg px-4 py-2'
                    onClick={onNext}
                >
                    <span className="text-light">
                        <LuCheck size={20}/>
                    </span>
                    دریافت کد
                </button>

            </div>
        </>
    )
}

const SecondSegment = ({onSubmit , onPrev}) => {

    return (
        <>
            <div className="flex flex-col justify-start items-start gap-y-2 w-full">
                <span className="font-bold text-gray text-sm">
                    کد تایید
                </span>
                <label
                    htmlFor="phoneNumber-input"
                    className="flex justify-center items-center gap-x-2 w-full bg-secondary rounded-lg px-4 py-2"
                >
                    <input
                        id="phoneNumber-input"
                        type="text"
                        className="w-full bg-transparent text-gray text-left font-bold focus:outline-none"
                    />
                </label>
            </div>

            <div className="flex justify-start items-center w-full">
                <p className="text-sm text-dark">کد ارسالی به شماره 09195610753 را وارد کنید.</p>
            </div>

            <div className="flex justify-end items-center gap-x-4 w-full mt-auto md:mt-4">

                <button
                    className="flex justify-center items-center gap-x-2 text-gray text-sm font-bold px-4 py-2"
                    onClick={onPrev}
                >
                    <span className="text-gray">
                        <LuRefreshCw size={20}/>
                    </span>
                    دریافت مجدد ( 1:59 )
                </button>

                <button
                    className='flex justify-center items-center gap-x-2 bg-blue text-light text-sm font-bold rounded-lg px-4 py-2'
                    onClick={onSubmit}
                >
                    <span className="text-light">
                        <LuCheck size={20}/>
                    </span>
                    تایید
                </button>

            </div>
        </>
    )
}

const SignInModal = ({isOpenModal , onCloseModal}) => {

    const {segment , _handleNextSection , _handlePrevSection} = useSegment();

    return (
        <Dialog
            visible={isOpenModal}
            onClose={onCloseModal}
            mask={false}
        >

            <div
                className="fixed top-0 left-0 z-30 flex justify-start items-start md:justify-center md:items-center w-full h-full bg-gray/75 md:p-4"
                onClick={onCloseModal}
            >

                <div
                    className="flex flex-col justify-center items-start gap-y-4 w-full h-full md:max-w-md md:h-max bg-light md:rounded-lg p-4"
                    onClick={(e) => e.stopPropagation()}
                >

                    <div className="flex justify-between items-center w-full gap-x-4">

                        <h3 className="text-dark font-bold">
                            ورود به حساب کاربری
                        </h3>

                        <button
                            className='text-red p-2'
                            onClick={onCloseModal}
                        >
                            <LuX size={20}/>
                        </button>

                    </div>

                    {
                        segment.active === 0 && (
                            <FirstSegment
                                onCancel={onCloseModal}
                                onNext={_handleNextSection}
                            />
                        )
                    }

                    {
                        segment.active === 1 && (
                            <SecondSegment
                                onPrev={_handlePrevSection}
                                onSubmit={onCloseModal}
                            />
                        )
                    }

                </div>

            </div>

        </Dialog>
    )
}

export default SignInModal;