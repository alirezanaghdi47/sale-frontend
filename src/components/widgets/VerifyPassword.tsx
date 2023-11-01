'use client';

// libraries
import {useFormik} from "formik";
import {LuCheck, LuChevronLeft} from "react-icons/lu";

// components
import {Button} from "@/components/modules/Button";
import {LinkIconButton} from "@/components/modules/IconButton";
import PasswordInput from "@/components/modules/PasswordInput";

const Form = () => {

    const formik = useFormik({
        initialValues:{
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

            <div className="flex justify-end items-center gap-x-2 w-full">

                <Button
                    variant="contained"
                    color="blue"
                    size="full"
                >
                    <LuCheck size={20}/>
                    ثبت
                </Button>

            </div>

        </div>
    )
}

export const VerifyPassword = () => {

    return (
        <div className="flex flex-col justify-center items-center gap-y-4 w-full">

            <div className="flex justify-between items-center gap-x-2 w-full">

                <h3 className="text-gray font-bold text-xl">
                    تغییر رمز
                </h3>

                <LinkIconButton
                    variant="text"
                    color="gray"
                    href="/auth/forget-password"
                >
                    <LuChevronLeft size={20}/>
                </LinkIconButton>

            </div>

            <Form/>

        </div>
    )
}