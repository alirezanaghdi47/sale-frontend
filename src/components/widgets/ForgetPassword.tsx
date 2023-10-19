'use client';

// libraries
import {useFormik} from "formik";
import {LuCheck} from "react-icons/lu";

// components
import Button from "@/components/modules/Button";
import TextInput from "@/components/modules/TextInput";

export const ForgetPassword = () => {

    const formik = useFormik({
        initialValues:{
            email: "",
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

                <TextInput
                    title="ایمیل"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                    touched={formik.touched.email}
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
                    اعتبارسنجی
                </Button>

            </div>

            <div className='flex justify-center items-center gap-x-2 w-full mt-2'>

                <p className="text-gray font-bold text-xs">
                    اگر ایمیل دریافت نکردید
                </p>

                <button
                    className='text-blue font-bold text-xs'
                >
                    کلیک کنید
                </button>

            </div>

        </div>
    )
}