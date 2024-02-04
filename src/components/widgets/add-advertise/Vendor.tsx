"use client";

// libraries
import dynamic from "next/dynamic";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {FormikProps, useFormik} from "formik";
import toast from "react-hot-toast";
import {LuCheck, LuChevronRight} from "react-icons/lu";

// components
const Map = dynamic(() => import("@/components/widgets/add-advertise/Map"), {ssr: false});

// modules
import {Button} from "@/modules/Button";
import SelectBox from "@/modules/SelectBox";

// services
import {addMyAdvertiseService} from "@/services/myAdvertiseService";

// types
import {AddAdvertiseVendorType} from "@/types/components";
import {AddAdvertiseVendorFormType} from "@/types/constants";
import {IAddMyAdvertise} from "@/types/services";

// utils
import {cityList} from "@/utils/constants";
import {addAdvertiseLocationSchema} from "@/utils/validations";

const Vendor = ({data, setData, onPrev, onSubmit}: AddAdvertiseVendorType) => {

    const queryClient = useQueryClient();

    const {mutate, isPending} = useMutation({
        mutationFn: (data: IAddMyAdvertise) => addMyAdvertiseService(data),
        onSuccess: async (data) => {
            if (data.status === "success") {
                queryClient.invalidateQueries({queryKey: ["allMyAdvertise", {page: 1, sort: "newest"}]});
                toast.success(data.message);
                onSubmit();
            } else {
                toast.success(data.message);
            }
        }
    });

    const formik: FormikProps<AddAdvertiseVendorFormType> = useFormik({
        initialValues: {
            city: data?.city || null,
            latitude: data?.latitude || null,
            longitude: data?.longitude || null,
        },
        validationSchema: addAdvertiseLocationSchema,
        onSubmit: async (result) => {
            setData({...data, ...result});
            mutate({...data, ...result});
        }
    });

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <div className="flex flex-col justify-center items-start gap-y-4 w-full bg-light rounded-lg p-4">

                <ul className='grid grid-cols-12 justify-start items-start gap-4 w-full'>

                    <li className="col-span-12 flex flex-col justify-start items-start gap-y-2">

                         <span className="text-gray text-xs font-bold">
                            شهر
                        </span>

                        <SelectBox
                            name="city"
                            isSearchable
                            options={cityList}
                            value={cityList.find(cityItem => cityItem.value === formik.values.city)}
                            // @ts-ignore
                            onChange={(value) => formik.setFieldValue("city", value?.value)}
                        />

                        {
                            formik.errors.city && formik.touched.city && (
                                <p className='text-red text-xs'>
                                    {formik.errors.city}
                                </p>
                            )
                        }

                    </li>

                    <li className="col-span-12 flex flex-col justify-start items-start gap-y-2">

                        <span className="text-gray text-xs font-bold">
                            آدرس
                        </span>

                        <div className='w-full h-[320px] bg-secondary rounded-lg p-4'>
                            <Map
                                setLocation={(value) => {
                                    formik.setFieldValue("latitude", value.latitude);
                                    formik.setFieldValue("longitude", value.longitude);
                                }}
                            />
                        </div>

                        {
                            formik.touched?.latitude && formik.errors?.latitude && (
                                <p className='text-red text-xs'>
                                    {formik.errors.latitude}
                                </p>
                            )
                        }

                        {
                            formik.touched?.longitude && formik.errors?.longitude && (
                                <p className='text-red text-xs'>
                                    {formik.errors.longitude}
                                </p>
                            )
                        }

                    </li>

                </ul>

                <div className="flex justify-end items-center gap-x-2 w-full">

                    <Button
                        variant="text"
                        color="gray"
                        startIcon={
                            <LuChevronRight
                                size={16}
                                className="text-current"
                            />
                        }
                        onClick={() => {
                            onPrev();
                            setData({...data, ...formik.values});
                        }}
                    >
                        قبلی
                    </Button>

                    <Button
                        variant="contained"
                        color="green"
                        startIcon={
                            <LuCheck
                                size={16}
                                className="text-current"
                            />
                        }
                        disabled={isPending}
                        onClick={formik.handleSubmit}
                    >
                        ثبت
                    </Button>

                </div>

            </div>

        </section>
    )
}

export default Vendor;