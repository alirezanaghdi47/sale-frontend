"use client";

// libraries
import {useRouter} from "next/navigation";
import Image from "next/image";
import {LuChevronRight} from "react-icons/lu";

// components
import {Button} from "@/components/modules/Button";

const NotFound = () => {

    const router = useRouter();

    return (
        <div className="flex flex-col justify-center items-center gap-y-4 w-full p-4">

            <Image
                src="/assets/images/not-found.svg"
                alt="not-found"
                width={200}
                height={200}
                className="max-w-[200px] max-h-[200px] object-center object-contain"
            />

            <h1 className="text-gray text-lg font-bold mt-2">
                صفحه مورد نظر یافت نشد
            </h1>

            <Button
                variant="contained"
                color="blue"
                startIcon={<LuChevronRight size={20}/>}
                onClick={() => router.back()}
            >
                بازگشت به خانه
            </Button>

        </div>
    )
}

export default NotFound;