'use client';

// libraries
import Image from "next/image";

// modules
import {LinkButton} from "@/modules/Button";

const Logo = () => {

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

export default Logo;