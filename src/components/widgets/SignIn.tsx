'use client';

// libraries
import Link from "next/link";
import {useFormik} from "formik";
import {LuCheck} from "react-icons/lu";

// components
import Button from "@/components/modules/Button";
import TextInput from "@/components/modules/TextInput";
import PasswordInput from "@/components/modules/PasswordInput";

export const SignIn = () => {

    const formik = useFormik({
        initialValues:{
            email: "",
            password: "",
        },
        // validationSchema: ,
        onSubmit: async (data) => {
            console.log(data)
        }
    });

    return (
        <div className="relative flex flex-col justify-center items-center gap-y-4 w-full">

            <h3 className="text-dark font-bold text-xl">
                ورود
            </h3>

            <div className="flex flex-col justify-center items-center gap-y-4 w-full">

                <TextInput
                    title="ایمیل"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                    touched={formik.touched.email}
                />

                <PasswordInput
                    title="رمز عبور"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                    touched={formik.touched.password}
                />

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

            <div className='flex justify-center items-center gap-x-2 w-full mt-2'>

                <p className="text-gray font-bold text-xs">
                    اگر حساب کاربری ندارید
                </p>

                <Link
                    href="/auth/sign-up"
                    className='text-blue font-bold text-xs'
                >
                    عضو شوید
                </Link>

            </div>

        </div>
    )
}