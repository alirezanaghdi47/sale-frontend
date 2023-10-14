'use client';

// libraries
import Link from "next/link";
import {LuCopyright} from "react-icons/lu";
import {BsInstagram, BsTelegram, BsTwitter, BsWhatsapp} from "react-icons/bs";

const Links = () => {

    return (
        <ul className="order-1 flex justify-start items-center gap-x-2">

            <li className="px-4 py-2">
                <Link href="/about-us" className='text-gray font-bold text-sm'>
                    درباره ما
                </Link>
            </li>

            <li className="px-4 py-2">
                <Link href="/support" className='text-gray font-bold text-sm'>
                    پشتیبانی
                </Link>
            </li>

        </ul>
    )
}

const CopyRight = () => {

    return (
        <div className="order-3 md:order-2 flex justify-center items-center">
            <p className="flex justify-center items-center gap-x-2 text-sm text-gray p-2">
                <span className="text-gray">
                    <LuCopyright size={16}/>
                </span>
                1402-1403
            </p>
        </div>
    )
}

const SocialMedias = () => {

    return (
        <ul className="order-2 md:order-3 flex justify-center items-end gap-x-2">

            <li className="p-2">
                <Link href="/" className='text-gray'>
                    <BsTelegram size={20}/>
                </Link>
            </li>

            <li className="p-2">
                <Link href="/" className='text-gray'>
                    <BsWhatsapp size={20}/>
                </Link>
            </li>

            <li className="p-2">
                <Link href="/" className='text-gray'>
                    <BsInstagram size={20}/>
                </Link>
            </li>

            <li className="p-2">
                <Link href="/" className='text-gray'>
                    <BsTwitter size={20}/>
                </Link>
            </li>

        </ul>
    )
}

const Footer = () => {

    return (
        <footer className="flex justify-center items-center gap-x-2 w-full mt-auto">

            <div className='flex flex-col md:flex-row justify-between items-center gap-2 w-full max-w-[1200px] p-4'>

                <Links/>

                <CopyRight/>

                <SocialMedias/>

            </div>

        </footer>
    )
}

export default Footer;