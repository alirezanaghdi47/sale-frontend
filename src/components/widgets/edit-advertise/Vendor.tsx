"use client";

// libraries
import dynamic from "next/dynamic";
import {useParams} from "next/navigation";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {FormikProps, useFormik} from "formik";
import toast from "react-hot-toast";
import {LuChevronRight, LuPen} from "react-icons/lu";

// components
const Map = dynamic(() => import("@/components/widgets/edit-advertise/Map"), {ssr: false});

// modules
import {Button} from "@/modules/Button";
import SelectBox from "@/modules/SelectBox";

// services
import {editMyAdvertiseService} from "@/services/myAdvertiseService";

// types
import {EditAdvertiseVendorType} from "@/types/components";
import {EditAdvertiseVendorFormType} from "@/types/constants";

// utils
import {cityList} from "@/utils/constants";
import {addAdvertiseLocationSchema} from "@/utils/validations";

const Vendor = ({data, setData, onPrev, onSubmit}: EditAdvertiseVendorType) => {

    const params = useParams();
    const queryClient = useQueryClient();

    const {mutate, isPending} = useMutation({
        mutationFn: (data: any) => editMyAdvertiseService({data, id: params?.advertiseId}),
        onSuccess: async (data) => {
            if (data.status === "success") {
                queryClient.invalidateQueries({queryKey: ["allMyAdvertise", {page: 1, sort: "newest"}]});
                onSubmit();
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        }
    });

    const formik: FormikProps<EditAdvertiseVendorFormType> = useFormik({
        enableReinitialize: true,
        initialValues: {
            city: data?.city || "",
            latitude: data?.latitude || 0,
            longitude: data?.longitude || 0,
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
                                location={[formik.values.latitude , formik.values.longitude]}
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
                        color="yellow"
                        startIcon={
                            <LuPen
                                size={16}
                                className="text-current"
                            />
                        }
                        disabled={isPending}
                        onClick={formik.handleSubmit}
                    >
                        ویرایش
                    </Button>

                </div>

            </div>

        </section>
    )
}

export default Vendor;