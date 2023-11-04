"use client";

// libraries
import {useState} from "react";
import Image from "next/image";
import {useFormik} from "formik";
import {
    LuBadgeCheck,
    LuCheck,
    LuLogOut,
    LuMonitor,
    LuTablet
} from "react-icons/lu";

// components
import {Button} from "@/components/modules/Button";
import {IconButton} from "@/components/modules/IconButton";
import { Tabs , TabPanel , TabList , TabItem} from "@/components/modules/Tabs";
import AvatarInput from "@/components/modules/AvatarInput";
import TextInput from "@/components/modules/TextInput";
import NumberInput from "@/components/modules/NumberInput";
import SelectBox from "@/components/modules/SelectBox";
import PasswordInput from "@/components/modules/PasswordInput";

// utils
import {EditProfileInformationSchema, EditProfileSecuritySchema} from "@/utils/validations";
import {dayList, monthList, sessionList, yearList , profileTabList} from "@/utils/constants";

const Information = () => {

    return (
        <section className='flex flex-col justify-center items-start gap-y-4 w-full'>

            <div className="relative flex flex-col md:flex-row justify-center items-center gap-4 w-full bg-light rounded-lg p-4">

                <div className="flex md:hidden absolute top-4 left-4">

                    <IconButton
                        variant="contained"
                        color="red"
                    >
                        <LuLogOut size={20}/>
                    </IconButton>

                </div>

                <div className="flex justify-center md:justify-start items-center min-w-[100px]">

                    <Image
                        src="/assets/images/avatar.jpg"
                        alt="avatar"
                        width={100}
                        height={100}
                        className='object-cover object-center rounded-full'
                    />

                </div>

                <div className='flex flex-col justify-center items-center md:items-start gap-y-2 w-full'>

                    <p className="text-base font-bold text-dark">
                        علیرضا نقدی
                    </p>

                    <p className="text-xs font-bold text-dark">
                        alirezanaghdi47@gmail.com
                    </p>

                    <p className="text-xs font-bold text-dark">
                        09195610753
                    </p>

                    <span className="flex justify-start items-center gap-x-2 text-xs font-bold text-green">
                        <LuBadgeCheck size={20}/>
                        هویت تایید شده است
                    </span>

                    {/*<span className="text-xs text-red font-bold">*/}
                    {/*    هویت تایید نشده است*/}
                    {/*</span>*/}

                </div>

            </div>

        </section>
    )
}

const Edit = () => {

    const formik = useFormik({
        initialValues: {
            avatar: null,
            name: "",
            family: "",
            email: "",
            phoneNumber: "",
            birthDay: "",
            birthMonth: "",
            birthYear: "",
        },
        validationSchema: EditProfileInformationSchema,
        onSubmit: async (data) => {
            console.log(data)
        }
    });

    return (
        <section className='flex flex-col justify-center items-start gap-y-2 w-full'>

            <div className="flex flex-col justify-center items-start gap-y-8 w-full bg-light rounded-lg p-4">

                <ul className='grid grid-cols-12 justify-start items-start gap-4 w-full'>

                    <li className="col-span-12 flex flex-col justify-start items-start gap-y-4">

                        <span className="text-gray text-sm font-bold">
                            آواتار
                        </span>

                        <AvatarInput
                            title="آواتار"
                            name="avatar"
                            value={formik.values.avatar}
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

                         <span className="text-gray text-sm font-bold">
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

                         <span className="text-gray text-sm font-bold">
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

                    </li>

                    <li className="col-span-12 sm:col-span-6 flex flex-col justify-start items-start gap-y-2">

                         <span className="text-gray text-sm font-bold">
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

                    <li className="col-span-12 flex flex-col justify-start items-start gap-y-2">

                        <span className="text-gray text-sm font-bold">
                            تاریخ تولد ( روز ، ماه ، سال )
                        </span>

                        <div className="flex justify-start items-center gap-x-2 w-full">

                            <SelectBox
                                name="birthDay"
                                isSearchable={false}
                                options={dayList}
                                value={formik.values.birthDay}
                                onChange={(value) => formik.setFieldValue("birthDay", value)}
                            />

                            <SelectBox
                                name="birthMonth"
                                isSearchable={false}
                                options={monthList}
                                value={formik.values.birthMonth}
                                onChange={(value) => formik.setFieldValue("birthMonth", value)}
                            />

                            <SelectBox
                                name="birthYear"
                                isSearchable={false}
                                options={yearList}
                                value={formik.values.birthYear}
                                onChange={(value) => formik.setFieldValue("birthYear", value)}
                            />

                        </div>

                        {
                            (formik.errors.birthDay && formik.touched.birthDay) ||
                            (formik.errors.birthMonth && formik.touched.birthMonth) ||
                            (formik.errors.birthYear && formik.touched.birthYear) && (
                                <p className='text-red text-xs'>
                                    {formik.errors.birthDay || formik.errors.birthMonth || formik.errors.birthYear}
                                </p>
                            )
                        }

                    </li>

                </ul>

                <div className="flex justify-end items-center gap-x-2 w-full">

                    <Button
                        variant="contained"
                        color="blue"
                        startIcon={<LuCheck size={20}/>}
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

    const formik = useFormik({
        initialValues: {
            currentPassword: "",
            newPassword: "",
            newPasswordRepeat: "",
        },
        validationSchema: EditProfileSecuritySchema,
        onSubmit: async (data) => {
            console.log(data)
        }
    });

    return (
        <section className='flex flex-col justify-center items-start gap-y-2 w-full'>

            <div className="flex flex-col justify-center items-start gap-y-8 w-full bg-light rounded-lg p-4">

                <div className="flex flex-col justify-center items-center gap-y-4 w-full">

                    <div className='flex flex-col justify-start items-start gap-y-2 w-full'>

                        <span className="text-gray text-sm font-bold">
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

                        <span className="text-gray text-sm font-bold">
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

                        <span className="text-gray text-sm font-bold">
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
                        startIcon={<LuCheck size={20}/>}
                        onClick={() => formik.handleSubmit()}
                    >
                        ثبت
                    </Button>

                </div>

            </div>

        </section>
    )
}

const SessionItem = ({sessionItem}) => {

    return (
        <li className="flex justify-start items-center gap-x-4 w-full border-b border-solid border-secondary last-of-type:border-none pb-4 last-of-type:pb-0">

            <span className="text-gray">
                {sessionItem?.device === "mobile" ? <LuTablet size={24}/> : <LuMonitor size={24}/>}
            </span>

            <div className="flex justify-between items-center gap-x-2 w-full">

                <div className="flex flex-col justify-center items-start gap-y-2">

                    <span className="text-sm text-dark">
                        {sessionItem?.country} ، {sessionItem?.city}
                    </span>

                    <span className="text-sm text-dark">
                        {sessionItem?.browser}
                    </span>

                </div>

                <div className="flex flex-col justify-center items-end gap-y-2">

                    {
                        sessionItem?.ip === "192.168.1.1" && (
                            <span className="bg-green text-light text-xs font-bold rounded-full px-2 py-1">
                                دستگاه فعلی
                            </span>
                        )
                    }

                    <span className="text-xs text-gray">
                        {sessionItem?.createDate}
                    </span>

                </div>

            </div>

        </li>
    )
}

const SessionList = () => {

    return (
        <ul className='flex flex-col justify-start items-center gap-y-4 w-full'>
            {
                sessionList.map(sessionItem =>
                    <SessionItem
                        key={sessionItem.id}
                        sessionItem={sessionItem}
                    />
                )
            }
        </ul>
    )
}

const Session = () => {

    return (
        <section className='flex flex-col justify-center items-start gap-y-2 w-full'>

            <div className="flex flex-col justify-center items-start gap-y-8 w-full bg-light rounded-lg p-4">
                <SessionList/>
            </div>

        </section>
    )
}

export const Profile = () => {

    const [activeTab , setActiveTab] = useState("user-information");

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

                <TabPanel activeTab={activeTab === "session-history"}>
                    <Session/>
                </TabPanel>

            </Tabs>

        </div>
    )
}