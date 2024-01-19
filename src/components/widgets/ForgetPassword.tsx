'use client';

// libraries
import {useMutation} from "@tanstack/react-query";
import {useFormik} from "formik";
import {LuCheck} from "react-icons/lu";

// components
import {Button, LinkButton} from "@/components/modules/Button";
import TextInput from "@/components/modules/TextInput";

// services
import {forgetPasswordService} from "@/services/authService";

// utils
import {ForgetPasswordSchema} from "@/utils/validations";

const Heading = () => {

    return (
        <div className="flex justify-between items-center gap-x-2 w-full">

            <h3 className="text-gray font-bold text-xl">
                فراموشی رمز
            </h3>

        </div>
    )
}

const Form = () => {

    const {mutate, isPending} = useMutation({
        mutationFn: (data) => forgetPasswordService(data),
        onSuccess: async (data) => {
            const {notification} = await import("@/components/modules/Notification");

            if (data.status === "success") {
                notification(data.message, "success");
            } else {
                notification(data.message, "error");
            }
        }
    });

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: ForgetPasswordSchema,
        onSubmit: async (result) => {
            mutate(result);
        }
    });

    return (
        <div className='flex flex-col justify-center items-center gap-y-4 w-full'>

            <div className="flex flex-col justify-center items-center gap-y-4 w-full">

                <div className='flex flex-col justify-start items-start gap-y-2 w-full'>

                    <span className="text-gray text-sm font-bold">
                        ایمیل
                    </span>

                    <TextInput
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />

                    {
                        formik.errors.email && formik.touched.email && (
                            <p className='text-red text-xs'>
                                {formik.errors.email}
                            </p>
                        )
                    }

                </div>

            </div>

            <div className="flex justify-end items-center gap-x-2 w-full mt-4">

                <Button
                    variant="contained"
                    color="blue"
                    size="full"
                    onClick={() => formik.handleSubmit()}
                >
                    <LuCheck
                        size={20}
                        className="text-current"
                    />
                    اعتبارسنجی
                </Button>

            </div>

        </div>
    )
}

const Links = () => {

    return (
        <div className='flex flex-col justify-center items-center gap-y-4 w-full'>

            <div className='flex justify-center items-center gap-x-2 w-full mt-2'>

                <p className="text-gray font-bold text-sm">
                    اگر میخواهید وارد شوید
                </p>

                <LinkButton
                    variant="text"
                    color="blue"
                    href="/auth/sign-in"
                    size="sm"
                >
                    کلیک کنید
                </LinkButton>

            </div>

        </div>
    )
}

export const ForgetPassword = () => {

    return (
        <div className="flex flex-col justify-center items-center gap-y-4 w-full">

            <Heading/>

            <Form/>

            <Links/>

        </div>
    )
}