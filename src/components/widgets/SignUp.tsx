'use client';

// libraries
import {useFormik} from "formik";
import {LuCheck} from "react-icons/lu";

// components
import {Button, LinkButton} from "@/components/modules/Button";
import TextInput from "@/components/modules/TextInput";
import PasswordInput from "@/components/modules/PasswordInput";

const Form = () => {

    const formik = useFormik({
        initialValues:{
            email: "",
            password: "",
            passwordRepeat: "",
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

                    <span className="text-gray text-sm font-bold">
                        رمز عبور جدید
                    </span>

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

                <div className='flex flex-col justify-start items-start gap-y-2 w-full'>

                    <span className="text-gray text-sm font-bold">
                        تکرار رمز عبور جدید
                    </span>

                    <PasswordInput
                        name="passwordRepeat"
                        value={formik.values.passwordRepeat}
                        onChange={formik.handleChange}
                    />

                    {
                        formik.errors.passwordRepeat && formik.touched.passwordRepeat && (
                            <p className='text-red text-xs'>
                                {formik.errors.passwordRepeat}
                            </p>
                        )
                    }

                </div>

            </div>

        </div>
    )
}

const Links = () => {

    return (
        <div className='flex flex-col justify-center items-center gap-y-4 w-full'>

            <div className="flex justify-end items-center gap-x-2 w-full mt-4">

                <Button
                    variant="contained"
                    color="blue"
                    size="full"
                >
                    <LuCheck size={20}/>
                    عضویت
                </Button>

            </div>

            <div className='flex justify-center items-center gap-x-2 w-full mt-2'>

                <p className="text-gray font-bold text-xs">
                    اگر حساب کاربری دارید
                </p>

                <LinkButton
                    variant="text"
                    size="sm"
                    color="blue"
                    href="/auth/sign-in"
                >
                    وارد شوید
                </LinkButton>

            </div>

        </div>
    )
}

export const SignUp = () => {

    return (
        <div className="flex flex-col justify-center items-center gap-y-4 w-full">

            <h3 className="text-dark font-bold text-xl">
                عضویت
            </h3>

            <Form/>

            <Links/>

        </div>
    )
}