'use client';

// libraries
import Dialog from "rc-dialog";
import {LuCheck, LuX} from "react-icons/lu";

const CategoriesModal = ({isOpenModal , onCloseModal}) => {

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
                    className="flex flex-col justify-start items-center gap-y-4 w-full h-full md:max-w-md md:h-max bg-light md:rounded-lg p-4"
                    onClick={(e) => e.stopPropagation()}
                >

                    <div className="flex justify-between items-center w-full gap-x-4">

                        <h3 className="text-dark font-bold">
                            دسته بندی ها
                        </h3>

                        <button
                            className='text-red p-2'
                            onClick={onCloseModal}
                        >
                            <LuX size={20}/>
                        </button>

                    </div>

                    <div className="flex justify-end items-center gap-x-4 w-full mt-auto">

                        <button
                            className='flex justify-center items-center gap-x-2 text-gray text-sm font-bold px-4 py-2'
                            onClick={onCloseModal}
                        >
                            <span className="text-gray">
                                <LuX size={20}/>
                            </span>
                            انصراف
                        </button>

                        <button
                            className='flex justify-center items-center gap-x-2 bg-blue text-light text-sm font-bold rounded-lg px-4 py-2'
                            onClick={onCloseModal}
                        >
                            <span className="text-light">
                                <LuCheck size={20}/>
                            </span>
                            ثبت
                        </button>

                    </div>

                </div>

            </div>

        </Dialog>
    )
}

export default CategoriesModal;