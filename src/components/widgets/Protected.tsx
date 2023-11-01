// libraries
import {LuCopyright} from "react-icons/lu";

// components
import {LinkButton} from "@/components/modules/Button";

export const Logo = () => {

    return (
        <LinkButton
            variant="text"
            color='dark'
            size="lg"
            href="/"
        >
            فروشگاه
        </LinkButton>
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