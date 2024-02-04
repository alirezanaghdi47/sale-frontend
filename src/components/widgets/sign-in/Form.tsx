'use client';

// libraries
import {useRouter, useSearchParams} from "next/navigation";
import {signIn} from "next-auth/react";
import {FormikProps, useFormik} from "formik";
import {LuLogIn} from "react-icons/lu";

// modules
import {Button} from "@/modules/Button";
import NumberInput from "@/modules/NumberInput";
import PasswordInput from "@/modules/PasswordInput";

// types
import {SignInFormType} from "@/types/constants";

// utils
import {SignInSchema} from "@/utils/validations";

const Form = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const formik: FormikProps<SignInFormType> = useFormik({
        initialValues: {
            phoneNumber: "",
            password: "",
        },
        validationSchema: SignInSchema,
        onSubmit: async (result) => {
            const {notification} = await import("@/components/partials/Notification");

            const response = await signIn(
                "credentials",
                {
                    redirect: false,
                    phoneNumber: result.phoneNumber,
                    password: result.password
                }
            );

            // @ts-ignore
            if (response.ok) {
                notification("خوش آمدید", "success");
                router.push(searchParams.get("callbackUrl") ? `${process.env.BASE_URL}/${searchParams.get("callbackUrl")}` : `${process.env.BASE_URL}/advertises`);
            } else {
                // @ts-ignore
                notification(response.error, "error");
            }
        }
    });

    return (
        <div className='flex flex-col justify-center items-center gap-y-4 w-full'>

            <div className="flex flex-col justify-center items-center gap-y-4 w-full">

                <div className='flex flex-col justify-start items-start gap-y-2 w-full'>

                    <span className="text-gray text-xs font-bold">
                        شماره همراه
                    </span>

                    <NumberInput
                        name="phoneNumber"
                        options={{
                            delimiter: ' ',
                            blocks: [4, 3, 4],
                        }}
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                    />

                    {
                        formik.errors.phoneNumber && formik.touched.phoneNumber && (
                            <p className='text-red text-xs'>
                                {formik.errors.phoneNumber}
                            </p>
                        )
                    }

                </div>

                <div className='flex flex-col justify-start items-start gap-y-2 w-full'>

                    <span className="text-gray text-xs font-bold">
                        رمز عبور
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

export default Form;