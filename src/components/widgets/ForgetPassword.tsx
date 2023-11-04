'use client';

// libraries
import {useFormik} from "formik";
import {LuCheck, LuChevronLeft} from "react-icons/lu";

// components
import {Button} from "@/components/modules/Button";
import {LinkIconButton} from "@/components/modules/IconButton";
import TextInput from "@/components/modules/TextInput";

// utils
import {ForgetPasswordSchema} from "@/utils/validations";

const Heading = () => {

    return (
        <div className="flex justify-between items-center gap-x-2 w-full">

            <h3 className="text-gray font-bold text-xl">
                فراموشی رمز
            </h3>

            <LinkIconButton
                variant="text"
                color="gray"
                href="/auth/sign-in"
            >
                <LuChevronLeft size={20}/>
            </LinkIconButton>

        </div>
    )
}

const Form = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: ForgetPasswordSchema,
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

            </div>

            <div className="flex justify-end items-center gap-x-2 w-full mt-4">

                <Button
                    variant="contained"
                    color="blue"
                    size="full"
                    onClick={() => formik.handleSubmit()}
                >
                    <LuCheck size={20}/>
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

                <p className="text-gray font-bold text-xs">
                    اگر ایمیل دریافت نکردید
                </p>

                <Button
                    variant="text"
                    color="blue"
                    size="sm"
                >
                    کلیک کنید
                </Button>

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