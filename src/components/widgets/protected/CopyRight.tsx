'use client';

// libraries
import {LuCopyright} from "react-icons/lu";

const CopyRight = () => {

    return (
        <div className="flex justify-center items-center w-full">
            <p className="flex justify-center items-center gap-x-2 text-xs text-gray">
                <LuCopyright
                    size={16}
                    className="text-current"
                />
                1402-1403
            </p>
        </div>
    )
}

export default CopyRight;