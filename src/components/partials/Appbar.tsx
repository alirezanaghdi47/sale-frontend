'use client';

// libraries
import {FiMapPin, FiSearch} from "react-icons/fi";

// components
import CityModal from "@/components/partials/CityModal";
import SearchModal from "@/components/partials/SearchModal";

// hooks
import {useModal} from "@/hooks/useModal";

const Actions = () => {

    const {isOpenModal: isOpenCityModal, _handleHideModal: _handleHideCityModal, _handleShowModal: _handleShowCityModal} = useModal();

    return (
        <>
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
                    placeholder="جستجو بر اساس عنوان"
                    className="w-full bg-transparent text-gray text-sm font-bold focus:outline-none"
                />
            </label>

            <button
                className='flex justify-center items-center gap-x-2 text-gray text-sm font-bold'
                onClick={_handleShowCityModal}
            >
                <FiMapPin size={20}/>
                تهران
            </button>

            <CityModal
                isOpenModal={isOpenCityModal}
                onCloseModal={_handleHideCityModal}
            />

        </>
    )
}

const Header = () => {

    return (
        <header
            className="fixed top-0 left-0 z-20 flex md:hidden justify-center items-center w-full h-[70px] bg-light shadow-3xl">

            <div className='flex justify-center items-center gap-x-4 w-full max-w-[1200px] h-full p-4'>

                <Actions/>

            </div>

        </header>
    )
}

export default Header;