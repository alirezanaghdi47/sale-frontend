"use client";

// libraries
import {createColumnHelper} from "@tanstack/table-core";
import {useFormik} from "formik";
import {LuCheck} from "react-icons/lu";

// components
import Table from "@/components/modules/Table";
import AvatarInput from "@/components/modules/AvatarInput";
import TextInput from "@/components/modules/TextInput";
import NumberInput from "@/components/modules/NumberInput";
import SelectInput from "@/components/modules/SelectInput";
import DatePicker from "@/components/modules/DatePicker";
import Button from "@/components/modules/Button";

// utils
import {sessionsTableData , genderList} from "@/utils/constants";

const Form = () => {

    const formik = useFormik({
        initialValues:{
            avatar: null,
            name: "",
            family: "",
            code: "",
            phoneNumber: "",
            gender: "",
            birthDay: "",
        },
        // validationSchema: ,
       onSubmit: async (data) => {
           console.log(data)
       }
    });

    return (
        <section className='flex flex-col justify-center items-start gap-y-2 w-full'>

            <h1 className="text-dark font-bold text-base">
                اطلاعات کاربری
            </h1>

            <div className='flex flex-col justify-center items-start gap-y-4 w-full bg-light rounded-lg p-4'>

                <ul className='grid grid-cols-12 justify-start items-center gap-4 w-full'>

                    <li className="col-span-12 flex justify-start items-center">

                        <AvatarInput
                            title="آواتار"
                            name="avatar"
                            value={formik.values.avatar}
                            // onChange={}
                            error={formik.errors.avatar}
                            touched={formik.touched.avatar}
                        />

                    </li>

                    <li className="col-span-12 sm:col-span-6 flex justify-start items-center">

                        <TextInput
                            title="نام"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.errors.name}
                            touched={formik.touched.name}
                        />

                    </li>

                    <li className="col-span-12 sm:col-span-6 flex justify-start items-center">

                        <TextInput
                            title="نام خانوادگی"
                            name="family"
                            value={formik.values.family}
                            onChange={formik.handleChange}
                            error={formik.errors.family}
                            touched={formik.touched.family}
                        />

                    </li>

                    <li className="col-span-12 sm:col-span-6 flex justify-start items-center">

                        <NumberInput
                            title="کد ملی"
                            name="code"
                            value={formik.values.code}
                            onChange={formik.handleChange}
                            error={formik.errors.code}
                            touched={formik.touched.code}
                        />

                    </li>

                    <li className="col-span-12 sm:col-span-6 flex justify-start items-center">

                        <NumberInput
                            title="شماره موبایل"
                            name="phoneNumber"
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            error={formik.errors.phoneNumber}
                            touched={formik.touched.phoneNumber}
                        />

                    </li>

                    <li className="col-span-12 sm:col-span-6 flex justify-start items-center">

                        <SelectInput
                            title="جنسیت"
                            name="gender"
                            options={genderList}
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            error={formik.errors.gender}
                            touched={formik.touched.gender}
                        />

                    </li>

                    <li className="col-span-12 sm:col-span-6 flex justify-start items-center">

                        <DatePicker/>

                    </li>

                </ul>

                <div className="flex justify-end items-center gap-x-4 w-full">

                    <Button
                        variant="contained"
                        color="blue"
                        startIcon={<LuCheck size={20}/>}
                    >
                        ثبت
                    </Button>

                </div>

            </div>

        </section>
    )
}

const Sessions = () => {

    const columnHelper = createColumnHelper();
    const tableColumns = [
        columnHelper.accessor(row => row.number, {
            id: '#',
            header: () => (
                <span className="text-sm font-bold text-light line-clamp-1">
                    #
                </span>
            ),
            cell: info => (
                <span className="text-sm text-gray line-clamp-1">
                    {info.getValue()}
                </span>
            ),
            width: 50,
        }),
        columnHelper.accessor(row => row.ip, {
            id: 'ip',
            header: () => (
                <span className="text-sm font-bold text-light line-clamp-1">
                    آی پی
                </span>
            ),
            cell: info => (
                <span className="text-sm text-gray line-clamp-1">
                    {info.getValue()}
                </span>
            ),
            width: 200,
        }),
        columnHelper.accessor(row => row.country, {
            id: 'country',
            header: () => (
                <span className="text-sm font-bold text-light line-clamp-1">
                    کشور
                </span>
            ),
            cell: info => (
                <span className="text-sm text-gray line-clamp-1">
                    {info.getValue()}
                </span>
            ),
            width: 100,
        }),
        columnHelper.accessor(row => row.createDate, {
            id: 'createDate',
            header: () => (
                <span className="text-sm font-bold text-light line-clamp-1">
                    زمان ورود
                </span>
            ),
            cell: info => (
                <span className="text-sm text-gray line-clamp-1">
                    {info.getValue()}
                </span>
            ),
            width: 150,
        }),
    ];

    return (
        <section className='flex flex-col justify-center items-start gap-y-2 w-full'>

            <h1 className="text-dark font-bold text-base">
                تاریخچه ورود
            </h1>

            <div className='flex flex-col justify-start items-start gap-y-4 w-full bg-light rounded-lg p-4'>

                <Table
                    data={sessionsTableData}
                    columns={tableColumns}
                />

            </div>

        </section>
    )
}

export const Profile = () => {

    return(
        <div className="flex flex-col justify-start items-center gap-y-4 w-full">

            <Form/>

            <Sessions/>

        </div>
    )
}