'use client';

// libraries
import Link from "next/link";
import Image from "next/image";
import {FiUser} from "react-icons/fi";

// components
import ProfileModal from "@/components/widgets/private/ProfileModal";

// hooks
import {useModal} from "@/hooks/useModal";

const Logo = () => {

    return (
        <Link href="/">
            <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={80}
                height={20}
                className="min-w-[80px]"
            />
        </Link>
    )
}

const Actions = () => {

    const {isOpenModal: isOpenProfileModal, _handleHideModal: _handleHideProfileModal, _handleShowModal: _handleShowProfileModal} = useModal();

    return (
        <>
            <button
                className='flex justify-center items-center text-gray p-2'
                onClick={_handleShowProfileModal}
            >
                <FiUser size={20}/>
            </button>

            <ProfileModal
                isOpenModal={isOpenProfileModal}
                onCloseModal={_handleHideProfileModal}
            />
        </>
    )
}

const Appbar = () => {

    return (
        <header
            className="fixed top-0 left-0 z-20 flex md:hidden justify-center items-center w-full h-[70px] bg-light shadow-3xl">

            <div className='flex justify-between items-center gap-x-4 w-full max-w-[1200px] h-full p-4'>

                <Logo/>

                <Actions/>

            </div>

        </header>
    )
}

export default Appbar;