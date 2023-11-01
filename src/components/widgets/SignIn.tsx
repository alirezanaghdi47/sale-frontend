'use client';

// libraries
import {useFormik} from "formik";
import {LuCheck, LuChevronLeft} from "react-icons/lu";

// components
import {Button, LinkButton} from "@/components/modules/Button";
import {LinkIconButton} from "@/components/modules/IconButton";
import TextInput from "@/components/modules/TextInput";
import PasswordInput from "@/components/modules/PasswordInput";

const Form = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        // validationSchema: ,
        onSubmit: async (data) => {
            console.log(data)
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

                <div className='flex flex-col justify-start items-start gap-y-2 w-full'>

                    <div className="flex justify-between items-center w-full">

                        <span className="text-gray text-sm font-bold">
                            رمز عبور
                        </span>

                        <LinkButton
                            variant="text"
                            size="sm"
                            color="blue"
                            href="/auth/forget-password"
                        >
                            فراموشی رمز
                        </LinkButton>

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
                >
                    <span className="text-light">
                        <LuCheck size={20}/>
                    </span>
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
                    size="sm"
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

            <div className="flex justify-between items-center gap-x-2 w-full">

                <h3 className="text-gray font-bold text-xl">
                    ورود
                </h3>

                <LinkIconButton
                    variant="text"
                    color="gray"
                    href="/"
                >
                    <LuChevronLeft size={20}/>
                </LinkIconButton>

            </div>

            <Form/>

            <Links/>

        </div>
    )
}