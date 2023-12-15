'use client';

// libraries
import {useRouter, useSearchParams} from "next/navigation";
import {useMutation} from "@tanstack/react-query";
import {useFormik} from "formik";
import {LuCheck, LuChevronLeft} from "react-icons/lu";

// components
import {Button} from "@/components/modules/Button";
import {LinkIconButton} from "@/components/modules/IconButton";
import PasswordInput from "@/components/modules/PasswordInput";

// services
import {verifyPasswordService} from "@/services/authService";

// utils
import {VerifyPasswordSchema} from "@/utils/validations";

const Heading = () => {

    return (
        <div className="flex justify-between items-center gap-x-2 w-full">

            <h3 className="text-gray font-bold text-lg">
                تغییر رمز
            </h3>

        </div>
    )
}

const Form = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const {mutate, isPending} = useMutation({
        mutationFn: (data) => verifyPasswordService({newPassword: data.newPassword, token: searchParams.get("token")}),
        onSuccess: async (data) => {
            const {notification} = await import("@/components/modules/Notification");

            if (data.status === "success") {
                router.push("/auth/sign-in");
                notification(data.message, "success");
            } else {
                notification(data.message, "error");
            }
        }
    });

    const formik = useFormik({
        initialValues: {
            newPassword: "",
            newPasswordRepeat: "",
        },
        validationSchema: VerifyPasswordSchema,
        onSubmit: async (result) => {
            mutate(result);
        }
    });

    return (
        <div className='flex flex-col justify-center items-center gap-y-4 w-full'>

            <div className="flex flex-col justify-center items-center gap-y-4 w-full">

                <div className='flex flex-col justify-start items-start gap-y-2 w-full'>

                    <span className="text-gray text-xs font-bold">
                        رمز عبور جدید
                    </span>

                    <PasswordInput
                        name="newPassword"
                        value={formik.values.newPassword}
                        onChange={formik.handleChange}
                    />

                    {
                        formik.errors.newPassword && formik.touched.newPassword && (
                            <p className='text-red text-xs'>
                                {formik.errors.newPassword}
                            </p>
                        )
                    }

                </div>

                <div className='flex flex-col justify-start items-start gap-y-2 w-full'>

                    <span className="text-gray text-xs font-bold">
                        تکرار رمز عبور جدید
                    </span>

                    <PasswordInput
                        name="newPasswordRepeat"
                        value={formik.values.newPasswordRepeat}
                        onChange={formik.handleChange}
                    />

                    {
                        formik.errors.newPasswordRepeat && formik.touched.newPasswordRepeat && (
                            <p className='text-red text-xs'>
                                {formik.errors.newPasswordRepeat}
                            </p>
                        )
                    }

                </div>

            </div>

            <div className="flex justify-end items-center gap-x-2 w-full">

                <Button
                    variant="contained"
                    color="blue"
                    size="full"
                    startIcon={
                        <LuCheck
                            size={20}
                            className="text-current"
                        />
                    }
                    onClick={() => formik.handleSubmit()}
                >
                    ثبت
                </Button>

            </div>

        </div>
    )
}

export const VerifyPassword = () => {

    return (
        <div className="flex flex-col justify-center items-center gap-y-4 w-full">

            <Heading/>

            <Form/>

        </div>
    )
}