'use client';

// libraries
import Dialog from "rc-dialog";
import Checkbox from "rc-checkbox";
import {useToggle} from "@react-hooks-library/core";
import {FiCheck, FiSearch, FiX} from "react-icons/fi";

// styles
import "rc-checkbox/assets/index.css";
import "@/styles/libraries/rc-checkbox.scss";

// utils
import {cityList} from "@/utils/constants";

const CityItem = ({cityItem}) => {

    const {bool: toggleCheckbox , toggle:_handleToggleCheckbox} = useToggle();

    return (
        <li
            className="flex justify-start items-center w-full cursor-pointer"
            onClick={_handleToggleCheckbox}
        >
            <Checkbox
                name={cityItem.value}
                checked={toggleCheckbox}
            />
            <span className="text-gray text-sm font-bold">
                {cityItem.title}
            </span>
        </li>
    )
}

const CityList = () => {
    return (
        <ul className='flex flex-col justify-start items-start gap-y-4 w-full h-full md:max-h-[300px] overflow-y-scroll'>
            {
                cityList.map(cityItem =>
                    <CityItem
                        key={cityItem.id}
                        cityItem={cityItem}
                    />
                )
            }
        </ul>
    )
}

const CityModal = ({isOpenModal , onCloseModal}) => {

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
                            شهر محل سکونت
                        </h3>

                        <button
                            className='text-red p-2'
                            onClick={onCloseModal}
                        >
                            <FiX size={20}/>
                        </button>

                    </div>

                    <label
                        htmlFor="search-input"
                        className="flex justify-center items-center gap-x-2 w-full bg-secondary rounded-lg px-4 py-2"
                    >
                           <span className="text-gray">
                            <FiSearch size={20}/>
                        </span>
                        <input
                            id="search-input"
                            type="text"
                            placeholder="جستجو ..."
                            className="w-full bg-transparent text-gray font-bold focus:outline-none"
                        />
                    </label>

                    <CityList/>

                    <div className="flex justify-end items-center gap-x-2 w-full mt-auto">

                        <button
                            className='flex justify-center items-center gap-x-2 text-gray text-sm font-bold px-4 py-2'
                            onClick={onCloseModal}
                        >
                            <FiX size={16}/>
                            انصراف
                        </button>

                        <button
                            className='flex justify-center items-center gap-x-2 bg-blue text-light text-sm font-bold rounded-lg px-4 py-2'
                            onClick={onCloseModal}
                        >
                            <FiCheck size={16}/>
                            ثبت
                        </button>

                    </div>

                </div>

            </div>

        </Dialog>
    )
}

export default CityModal;