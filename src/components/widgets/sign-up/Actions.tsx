'use client';

// modules
import {LinkButton} from "@/modules/Button";

const Actions = () => {

    return (
        <div className='flex flex-col justify-center items-center gap-y-4 w-full'>

            <div className='flex justify-center items-center gap-x-2 w-full'>

                <p className="text-gray font-bold text-xs">
                    اگر حساب کاربری دارید
                </p>

                <LinkButton
                    variant="text"
                    color="blue"
                    href="/auth/sign-in"
                >
                    وارد شوید
                </LinkButton>

            </div>

        </div>
    )
}

export default Actions;