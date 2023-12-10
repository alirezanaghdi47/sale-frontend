'use client';

// libraries
import {useRouter, useSearchParams} from "next/navigation";
import {signIn} from "next-auth/react";
import {useFormik} from "formik";
import {LuLogIn} from "react-icons/lu";

// components
import {Button, LinkButton} from "@/components/modules/Button";
import TextInput from "@/components/modules/TextInput";
import PasswordInput from "@/components/modules/PasswordInput";

// utils
import {SignInSchema} from "@/utils/validations";

const Heading = () => {

    return (
        <div className="flex justify-between items-center gap-x-2 w-full">

            <h3 className="text-lg text-dark font-bold">
                ورود
            </h3>

        </div>
    )
}

const Form = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: SignInSchema,
        onSubmit: async (result) => {

            const {notification} = await import("@/components/modules/Notification");

            const response = await signIn(
                "credentials",
                {
                    redirect: false,
                    email: result.email,
                    password: result.password
                }
            );

            if (response.ok) {
                notification("خوش آمدید", "success");
                router.push(searchParams.get("callbackUrl") ? `${process.env.BASE_URL}/${searchParams.get("callbackUrl")}` : `${process.env.BASE_URL}/advertises`);
            } else {
                notification(response.error, "error");
            }

        }
    });

    return (
        <div className='flex flex-col justify-center items-center gap-y-4 w-full'>

            <div className="flex flex-col justify-center items-center gap-y-4 w-full">

                <div className='flex flex-col justify-start items-start gap-y-2 w-full'>

                    <span className="text-gray text-xs font-bold">
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

                <div className='flex flex-col justify-start items-start gap-y-2 w-full'>

                    <div className="flex justify-between items-center w-full">

                        <span className="text-gray text-xs font-bold">
                            رمز عبور
                        </span>

                        {/*<LinkButton*/}
                        {/*    variant="text"*/}
                        {/*    color="blue"*/}
                        {/*    href="/auth/forget-password"*/}
                        {/*>*/}
                        {/*    فراموشی رمز*/}
                        {/*</LinkButton>*/}

                    </div>

                    <PasswordInput
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />

                    {
                        formik.errors.password && formik.touched.password && (
                            <p className='text-red text-xs'>
                                {formik.errors.password}
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
                    startIcon={
                        <LuLogIn
                            size={16}
                            className="text-current"
                        />
                    }
                    onClick={() => formik.handleSubmit()}
                >
                    ورود
                </Button>

            </div>

        </div>
    )
}

const Links = () => {

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

export const SignIn = () => {

    return (
        <div className="flex flex-col justify-center items-center gap-y-4 w-full">

            <Heading/>

            <Form/>

            <Links/>

        </div>
    )
}