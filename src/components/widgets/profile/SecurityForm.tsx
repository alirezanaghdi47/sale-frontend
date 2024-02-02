"use client";

// libraries
import {signOut, useSession} from "next-auth/react";
import {useMutation} from "@tanstack/react-query";
import {FormikProps, useFormik} from "formik";
import {LuCheck} from "react-icons/lu";

// modules
import {Button} from "@/modules/Button";
import PasswordInput from "@/modules/PasswordInput";

// services
import {editPasswordService} from "@/services/userService";

// types
import {IEditPasswordService} from "@/types/services";
import {ProfileSecurityFormType} from "@/types/constants";

// utils
import {EditProfileSecuritySchema} from "@/utils/validations";

const SecurityForm = () => {

    const {data: session} = useSession();

    const {mutate, isPending} = useMutation({
        mutationFn: (data: IEditPasswordService) => editPasswordService(data),
        onSuccess: async (data) => {

            const {notification} = await import("@/modules/Notification");

            if (data.status === "success") {
                notification(data.message, "success");
                signOut({callbackUrl: "/auth/sign-in"});
            } else {
                notification(data.message, "error");
            }

        }
    });

    const formik: FormikProps<ProfileSecurityFormType> = useFormik({
        initialValues: {
            currentPassword: "",
            newPassword: "",
            newPasswordRepeat: "",
        },
        validationSchema: EditProfileSecuritySchema,
        onSubmit: async (result) => {
            mutate(result)
        }
    });

    return (
        <section className='flex flex-col justify-center items-start gap-y-2 w-full'>

            <div className="flex flex-col justify-center items-start gap-y-8 w-full bg-light rounded-lg p-4">

                <div className="flex flex-col justify-center items-center gap-y-4 w-full">

                    <div className='flex flex-col justify-start items-start gap-y-2 w-full'>

                        <span className="text-gray text-xs font-bold">
                            رمز عبور فعلی
                        </span>

                        <PasswordInput
                            name="currentPassword"
                            value={formik.values.currentPassword}
                            onChange={formik.handleChange}
                        />

                        {
                            formik.errors.currentPassword && formik.touched.currentPassword && (
                                <p className='text-red text-xs'>
                                    {formik.errors.currentPassword}
                                </p>
                            )
                        }

                    </div>

                    <div className='flex flex-col justify-start items-start gap-y-2 w-full'>

                        <span className="text-gray text-xs font-bold">
                            رمز عبور جدید
                        </span>

                        <PasswordInput
                            name="newPassword"
                            value={formik.values.newPassword}
                            onChange={formik.handleChange}
                        />

                        {
                            formik.errors.newPassword && formik.touched.newPassword && (
                                <p className='text-red text-xs'>
                                    {formik.errors.newPassword}
                                </p>
                            )
                        }

                    </div>

                    <div className='flex flex-col justify-start items-start gap-y-2 w-full'>

                        <span className="text-gray text-xs font-bold">
                            تکرار رمز عبور جدید
                        </span>

                        <PasswordInput
                            name="newPasswordRepeat"
                            value={formik.values.newPasswordRepeat}
                            onChange={formik.handleChange}
                        />

                        {
                            formik.errors.newPasswordRepeat && formik.touched.newPasswordRepeat && (
                                <p className='text-red text-xs'>
                                    {formik.errors.newPasswordRepeat}
                                </p>
                            )
                        }

                    </div>

                </div>

                <div className="flex justify-end items-center gap-x-2 w-full">

                    <Button
                        variant="contained"
                        color="blue"
                        startIcon={
                            <LuCheck
                                size={16}
                                className="text-current"
                            />
                        }
                        onClick={() => formik.handleSubmit()}
                        disabled={isPending}
                    >
                        ثبت
                    </Button>

                </div>

            </div>

        </section>
    )
}

export default SecurityForm;