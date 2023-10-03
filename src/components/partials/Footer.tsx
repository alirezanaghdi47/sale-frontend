'use client';

// libraries
import Link from "next/link";
import Image from "next/image";
import {LuCopyright} from "react-icons/lu";

// assets
import logo from "@/assets/images/logo.png";

// utils
import {footerLinkList, socialMediaList} from "@/utils/constants";

const Logo = () => {

    return (
        <div className="order-1 col-span-12 sm:col-span-3 flex justify-center sm:justify-start items-center">
            <Link
                href="/"
                className=""
            >
                <Image
                    src={logo}
                    alt="logo"
                    width={80}
                />
            </Link>
        </div>
    )
}

const LinkItem = ({linkItem}) => {

    return (
        <li>
            <Link
                href="/"
                className='text-gray font-bold text-sm'
            >
                {linkItem.title}
            </Link>
        </li>
    )
}

const LinkList = () => {

    return (
        <ul className="flex justify-center items-center gap-x-4">
            {
                footerLinkList.map(footerLinkItem =>
                    <LinkItem
                        key={footerLinkItem.id}
                        linkItem={footerLinkItem}
                    />
                )
            }
        </ul>
    )
}

const Links = () => {

    return (
        <div className="order-3 sm:order-4 col-span-12 sm:col-span-6 flex justify-center sm:justify-end items-center">
            <LinkList/>
        </div>
    )
}

const CopyRight = () => {

    return (
        <div className="order-4 sm:order-3 col-span-12 sm:col-span-6 flex justify-center sm:justify-start items-center">
            <p className="flex justify-center items-center gap-x-2 text-sm text-gray">
                <LuCopyright size={16}/>
                1402-1403
            </p>
        </div>
    )
}

const SocialMediaItem = ({socialMediaItem}) => {

    return (
        <li className="p-2">
            <Link
                href="/"
                className='text-gray'
            >
                {socialMediaItem.icon}
            </Link>
        </li>
    )
}

const SocialMediaList = () => {

    return (
        <ul className="flex justify-center items-center gap-x-4">
            {
                socialMediaList.map(socialMediaItem =>
                    <SocialMediaItem
                        key={socialMediaItem.id}
                        socialMediaItem={socialMediaItem}
                    />
                )
            }
        </ul>
    )
}

const SocialMedias = () => {

    return (
        <div className="order-2 col-span-12 sm:col-span-9 flex justify-center sm:justify-end items-center">
            <SocialMediaList/>
        </div>
    )
}

const Footer = () => {

    return (
        <footer
            className="flex justify-center items-center gap-x-4 w-full mt-auto">
            <div className='grid grid-cols-12 gap-4 w-full max-w-[1200px] p-4'>
                <Logo/>
                <SocialMedias/>
                <CopyRight/>
                <Links/>
            </div>
        </footer>
    )
}

export default Footer;