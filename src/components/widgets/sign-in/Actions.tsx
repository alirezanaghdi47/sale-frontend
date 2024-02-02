'use client';

// modules
import {LinkButton} from "@/modules/Button";

const Actions = () => {

    return (
        <div className='flex flex-col justify-center items-center gap-y-4 w-full'>

            <div className='flex justify-center items-center gap-x-2 w-full mt-2'>

                <p className="text-gray font-bold text-xs">
                    اگر حساب کاربری ندارید
                </p>

                <LinkButton
                    variant="text"
                    color="blue"
                    href="/auth/sign-up"
                >
                    عضو شوید
                </LinkButton>

            </div>

        </div>
    )
}

export default Actions;