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
                    width={32}
                    height={32}
                    className="min-w-[32px] min-h-[32px] rounded-full"
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

            <p className="flex justify-center items-center gap-x-2 text-xs text-gray">

                <LuCopyright
                    size={12}
                    className="text-current"
                />

                1402-1403

            </p>

        </div>
    )
}