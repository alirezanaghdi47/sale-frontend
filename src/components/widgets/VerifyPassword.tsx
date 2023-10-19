'use client';

// libraries
import {useFormik} from "formik";
import {LuCheck} from "react-icons/lu";

// components
import Button from "@/components/modules/Button";
import PasswordInput from "@/components/modules/PasswordInput";

export const VerifyPassword = () => {

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
        <div className="relative flex flex-col justify-center items-center gap-y-4 w-full">

            <h3 className="text-dark font-bold text-xl">
                فراموشی رمز
            </h3>

            <div className="flex flex-col justify-center items-center gap-y-4 w-full">

                <PasswordInput
                    title="رمز عبور جدید"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                    touched={formik.touched.password}
                />

                <PasswordInput
                    title="تکرار رمز عبور جدید"
                    name="passwordRepeat"
                    value={formik.values.passwordRepeat}
                    onChange={formik.handleChange}
                    error={formik.errors.passwordRepeat}
                    touched={formik.touched.passwordRepeat}
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
                    ثبت
                </Button>

            </div>

        </div>
    )
}