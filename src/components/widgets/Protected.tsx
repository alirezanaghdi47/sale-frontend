'use client';

// libraries
import Link from "next/link";
import Image from "next/image";
import {LuCopyright} from "react-icons/lu";

export const Logo = () => {

    return (
        <Link href="/">
            <Image
                src="/assets/images/logo.png"
                alt='logo'
                width={32}
                height={32}
                className="min-w-[32px] min-h-[32px] rounded-full"
            />
        </Link>
    )
}

export const CopyRight = () => {

    return (
        <div className="flex justify-center items-center w-full">
            <p className="flex justify-center items-center gap-x-2 text-sm text-gray">
                <span className="text-gray">
                    <LuCopyright size={16}/>
                </span>
                1402-1403
            </p>
        </div>
    )
}