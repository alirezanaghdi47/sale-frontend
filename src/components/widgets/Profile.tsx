"use client";

// libraries
import {useState} from "react";
import Image from "next/image";
import {signOut, useSession} from "next-auth/react";
import {useMutation} from "@tanstack/react-query";
import {useFormik} from "formik";
import {LuBadgeCheck, LuCheck, LuUser} from "react-icons/lu";

// components
import {Button} from "@/components/modules/Button";
import {Tabs, TabPanel, TabList, TabItem} from "@/components/modules/Tabs";
import AvatarInput from "@/components/modules/AvatarInput";
import TextInput from "@/components/modules/TextInput";
import NumberInput from "@/components/modules/NumberInput";
import PasswordInput from "@/components/modules/PasswordInput";

// services
import {editPasswordService, editProfileService} from "@/services/userService";

// utils
import {EditProfileInformationSchema, EditProfileSecuritySchema} from "@/utils/validations";
import {profileTabList} from "@/utils/constants";

const Information = () => {

    const {data: session} = useSession();

    return (
        <section className='flex flex-col justify-center items-start gap-y-4 w-full'>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full bg-light rounded-lg p-4">

                <div className="flex justify-center md:justify-start items-center min-w-[120px]">

                    {
                        session?.user?.avatar ? (
                            <Image
                                src={session?.user?.avatar}
                                alt="avatar"
                                width={120}
                                height={120}
                                className='w-[120px] h-[120px] object-cover object-center rounded-full'
                            />
                        ) : (
                            <div
                                className="flex justify-center items-center min-w-[120px] h-[120px] bg-secondary text-gray rounded-full p-2">
                                <LuUser
                                    size={32}
                                    className='text-current'
                                />
                            </div>
                        )
                    }

                </div>

                <div className='flex flex-col justify-center items-center md:items-start gap-y-2 w-full'>

                    <p className="text-base font-bold text-dark">
                        {session?.user?.name && session?.user?.family ? `${session?.user?.name} ${session?.user?.family}` : "کاربر سایت"}
                    </p>

                    <p className="text-xs font-bold text-dark">
                        {session?.user?.email}
                    </p>

                    {
                        session?.user?.phoneNumber && (
                            <p className="text-xs font-bold text-dark">
                                {session?.user?.phoneNumber}
                            </p>
                        )
                    }

                    {
                        session?.user?.name && session?.user?.family && session?.user?.phoneNumber ? (
                            <span className="flex justify-start items-center gap-x-2 text-xs font-bold text-green">
                                <LuBadgeCheck
                                    size={16}
                                    className="text-current"
                                />
                                هویت تایید شده است
                            </span>
                        ) : (
                            <span className="text-xs text-red font-bold">
                                هویت تایید نشده است
                            </span>
                        )
                    }

                </div>

            </div>

        </section>
    )
}

const Edit = () => {

    const {data: session, update} = useSession();

    const {mutate, isPending} = useMutation({
        mutationFn: (data) => editProfileService({...data , preview: session?.user?.avatar}),
        onSuccess: async (data) => {

            const {notification} = await import("@/components/modules/Notification");

            const response = await update({
                avatar: data.data.avatar,
                name: data.data.name,
                family: data.data.family,
                phoneNumber: data.data.phoneNumber,
            });

            notification("ویرایش انجام شد", "success");

        }
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            avatar: null,
            name: session?.user?.name || "",
            family: session?.user?.family || "",
            email: session?.user?.email || "",
            phoneNumber: session?.user?.phoneNumber || "",
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
                            title="آواتار"
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
                            ایمیل
                        </span>

                        <TextInput
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            disabled
                        />

                        {
                            formik.errors.email && formik.touched.email && (
                                <p className='text-red text-xs'>
                                    {formik.errors.email}
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

const Security = () => {

    const {data: session} = useSession();

    const {mutate, isPending} = useMutation({
        mutationFn: (data) => editPasswordService(data),
        onSuccess: async (data) => {

            const {notification} = await import("@/components/modules/Notification");

            if (data.status === "success") {
                notification(data.message, "success");
                signOut({callbackUrl: "/auth/sign-in"});
            } else {
                notification(data.message, "error");
            }

        }
    });

    const formik = useFormik({
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

export const Profile = () => {

    const [activeTab, setActiveTab] = useState("user-information");

    return (
        <div className="flex flex-col justify-start items-center gap-y-4 w-full h-full">

            <Tabs>

                <TabList>

                    {
                        profileTabList.map(profileTab =>
                            <TabItem
                                key={profileTab.id}
                                tabItem={profileTab}
                                activeTab={activeTab}
                                setActiveTab={(value) => setActiveTab(value)}
                            />
                        )
                    }

                </TabList>

                <TabPanel activeTab={activeTab === "user-information"}>
                    <Information/>
                </TabPanel>

                <TabPanel activeTab={activeTab === "edit-information"}>
                    <Edit/>
                </TabPanel>

                <TabPanel activeTab={activeTab === "edit-password"}>
                    <Security/>
                </TabPanel>

            </Tabs>

        </div>
    )
}