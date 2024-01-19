'use client';

// libraries
import Image from "next/image";
import {LuCopyright} from "react-icons/lu";

// components
import {LinkButton} from "@/components/modules/Button";

export const Logo = () => {

    return (
        <LinkButton
            variant="text"
            size="md"
            color="gray"
            href="/"
            startIcon={
                <Image
                    src="/assets/images/logo.png"
                    alt='logo'
                    width={40}
                    height={40}
                    className="min-w-[40px] min-h-[40px] rounded-full"
                />
            }
        >
            نما گجت
        </LinkButton>
    )
}

export const CopyRight = () => {

    return (
        <div className="flex justify-center items-center w-full">

            <p className="flex justify-center items-center gap-x-2 text-sm text-gray">

                <LuCopyright
                    size={16}
                    className="text-current"
                />

                1402-1403

            </p>

        </div>
    )
}