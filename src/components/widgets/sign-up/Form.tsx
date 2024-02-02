'use client';

// libraries
import {useRouter} from "next/navigation";
import {useMutation} from "@tanstack/react-query";
import {FormikProps, useFormik} from "formik";
import {LuUserPlus} from "react-icons/lu";

// modules
import {Button} from "@/modules/Button";
import NumberInput from "@/modules/NumberInput";
import PasswordInput from "@/modules/PasswordInput";

// services
import {registerService} from "@/services/authService";

// types
import {IRegisterService} from "@/types/services";
import {SignUpFormType} from "@/types/constants";

// utils
import {SignUpSchema} from "@/utils/validations";

const Form = () => {

    const router = useRouter();

    const {mutate, isPending} = useMutation({
        mutationFn: (data: IRegisterService) => registerService(data),
        onSuccess: async (data) => {
            const {notification} = await import("@/modules/Notification");

            if (data.status === "success") {
                notification(data.message, "success");
                router.replace("/auth/sign-in");
            } else {
                notification(data.message, "error");
            }
        }
    });

    const formik: FormikProps<SignUpFormType> = useFormik({
        initialValues: {
            phoneNumber: "",
            password: "",
            passwordRepeat: "",
        },
        validationSchema: SignUpSchema,
        onSubmit: async (result) => {
            mutate(result);
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

                <div className='flex flex-col justify-start items-start gap-y-2 w-full'>

                    <span className="text-gray text-xs font-bold">
                        تکرار رمز عبور
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

            <div className="flex justify-end items-center gap-x-2 w-full mt-4">

                <Button
                    variant="contained"
                    color="blue"
                    size="full"
                    startIcon={
                        <LuUserPlus
                            size={16}
                            className="text-current"
                        />
                    }
                    disabled={isPending}
                    onClick={() => formik.handleSubmit()}
                >
                    عضویت
                </Button>

            </div>

        </div>
    )
}

export default Form;
