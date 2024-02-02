"use client";

// libraries
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import {useMutation} from "@tanstack/react-query";
import {FormikProps, useFormik} from "formik";
import {LuCheck} from "react-icons/lu";

// modules
import {Button} from "@/modules/Button";
import AvatarInput from "@/modules/AvatarInput";
import TextInput from "@/modules/TextInput";
import NumberInput from "@/modules/NumberInput";
import SelectBox from "@/modules/SelectBox";

// services
import {editProfileService} from "@/services/userService";

// types
import {IEditProfileService} from "@/types/services";

// types
import {ProfileEditFormType} from "@/types/constants";

// utils
import {EditProfileInformationSchema} from "@/utils/validations";
import {arrayRange} from "@/utils/functions";

const ageList = arrayRange(18, 99, 1).map((ageItem, index) => ({
    id: `${index + 1}`,
    label: `${ageItem}`,
    value: `${ageItem}`
}))

const EditForm = () => {

    const router = useRouter();
    const {data: session, update} = useSession();

    const {mutate, isPending} = useMutation({
        mutationFn: (data: IEditProfileService) => editProfileService({...data, preview: session?.user?.avatar}),
        onSuccess: async (data) => {
            const {notification} = await import("@/modules/Notification");

            await update({
                avatar: data.data.avatar ? data.data.avatar : null,
                name: data.data.name,
                family: data.data.family,
                age: data.data.age,
            });

            notification("ویرایش انجام شد", "success");

            router.refresh();
        }
    });

    // @ts-ignore
    const formik: FormikProps<ProfileEditFormType> = useFormik({
        enableReinitialize: true,
        initialValues: {
            avatar: null,
            name: session?.user?.name || "",
            family: session?.user?.family || "",
            phoneNumber: session?.user?.phoneNumber || "",
            age: session?.user?.age || "",
        },
        validationSchema: EditProfileInformationSchema,
        onSubmit: async (result) => {
            mutate(result);
        }
    });

    return (
        <section className='flex flex-col justify-center items-start gap-y-2 w-full'>

            <div className="flex flex-col justify-center items-start gap-y-8 w-full bg-light rounded-lg p-4">

                <ul className='grid grid-cols-12 justify-start items-start gap-4 w-full'>

                    <li className="col-span-12 flex flex-col justify-start items-start gap-y-4">

                        <span className="text-gray text-xs font-bold">
                            آواتار
                        </span>

                        <AvatarInput
                            name="avatar"
                            value={formik.values.avatar}
                            preview={session?.user?.avatar || null}
                            onChange={(value) => formik.setFieldValue("avatar", value)}
                        />

                        {
                            formik.errors.avatar && formik.touched.avatar && (
                                <p className='text-red text-xs'>
                                    {formik.errors.avatar}
                                </p>
                            )
                        }

                    </li>

                    <li className="col-span-12 sm:col-span-6 flex flex-col justify-start items-start gap-y-2">

                         <span className="text-gray text-xs font-bold">
                            نام
                        </span>

                        <TextInput
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />

                        {
                            formik.errors.name && formik.touched.name && (
                                <p className='text-red text-xs'>
                                    {formik.errors.name}
                                </p>
                            )
                        }

                    </li>

                    <li className="col-span-12 sm:col-span-6 flex flex-col justify-start items-start gap-y-2">

                         <span className="text-gray text-xs font-bold">
                            نام خانوادگی
                        </span>

                        <TextInput
                            name="family"
                            value={formik.values.family}
                            onChange={formik.handleChange}
                        />

                        {
                            formik.errors.family && formik.touched.family && (
                                <p className='text-red text-xs'>
                                    {formik.errors.family}
                                </p>
                            )
                        }

                    </li>

                    <li className="col-span-12 sm:col-span-6 flex flex-col justify-start items-start gap-y-2">

                         <span className="text-gray text-xs font-bold">
                            شماره موبایل
                        </span>

                        <NumberInput
                            name="phoneNumber"
                            options={{
                                delimiter: ' ',
                                blocks: [4, 3, 4],
                            }}
                            disabled
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

                    </li>

                    <li className="col-span-12 sm:col-span-6 flex flex-col justify-start items-start gap-y-2">

                         <span className="text-gray text-xs font-bold">
                            سن
                        </span>

                        <SelectBox
                            name="age"
                            isSearchable
                            options={ageList}
                            value={ageList.find(categoryItem => categoryItem.value === formik.values.age)}
                            // @ts-ignore
                            onChange={(value) => formik.setFieldValue("age", value?.value)}
                        />

                    </li>

                </ul>

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
                        disabled={isPending}
                        onClick={() => formik.handleSubmit()}
                    >
                        ثبت
                    </Button>

                </div>

            </div>

        </section>
    )
}

export default EditForm