"use client";

// libraries
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import {LuPencil, LuShare2, LuTrash2} from "react-icons/lu";

// components
import {IconButton} from "@/components/modules/IconButton";
const DeleteAdvertiseDialog = dynamic(() => import("@/components/partials/DeleteAdvertiseDialog") , {ssr: false});

// hooks
import {useDialog} from "@/hooks/useDialog";

// utils
import {copyToClipboard} from "@/utils/functions";

const AdvertiseCard = ({advertise, toolbar, disabled}) => {

    const {
        isOpenDialog: isOpenDeleteDialog,
        _handleShowDialog: _handleShowDeleteDialog,
        _handleHideDialog: _handleHideDeleteDialog
    } = useDialog();

    const _handleShareAdvertise = async () => {

        const {notification} = await import("@/components/modules/Notification");

        return copyToClipboard("link")
            .then(res => notification(res , "success"))
            .catch(err => notification(err , "error"));
    }

    return (
        <>
            <article className="relative flex justify-start items-center gap-x-4 bg-light rounded-lg p-4">

                {
                    disabled && (
                        <div
                            className="absolute top-0 left-0 z-10 flex justify-center items-center w-full h-full bg-light/90 rounded-lg">
                            <span className="bg-secondary text-gray font-bold rounded-lg px-4 py-2">
                                {disabled?.message}
                            </span>
                        </div>
                    )
                }

                <Link
                    className="flex justify-center items-center"
                    href="/advertises/benz-2006"
                >
                    <Image
                        src="/assets/images/card-image.jpg"
                        alt="advertise"
                        width={120}
                        height={120}
                        className="min-w-[120px] min-h-[120px] object-cover object-center rounded-lg"
                    />
                </Link>

                <div className="flex flex-col justify-center items-start gap-y-4">

                    <Link
                        className="flex flex-col justify-center items-start"
                        href="/advertises/benz-2006"
                    >
                        <h3 className="text-sm font-bold text-gray line-clamp-1">
                            بنز کلاسیک مدل ۲۰۰۶
                        </h3>
                    </Link>

                    <div className="flex flex-col justify-center items-start gap-y-2">

                        <span className="text-xs text-gray line-clamp-1">
                            در حد نو
                        </span>

                        <span className="text-xs text-gray line-clamp-1">
                            ۱٬۱۸۰٬۰۰۰٬۰۰۰ تومان
                        </span>

                        <span className="text-xs text-gray line-clamp-1">
                            ۶ روز پیش در تهران، افسریه
                        </span>

                    </div>

                </div>

                {
                    toolbar && (

                        <div className="flex flex-col justify-start items-start gap-y-2 mr-auto mb-auto">

                            {
                                toolbar.edit && (
                                    <IconButton
                                        variant="text"
                                        color="gray"
                                    >
                                        <LuPencil size={20}/>
                                    </IconButton>
                                )
                            }

                            {
                                toolbar.share && (
                                    <IconButton
                                        variant="text"
                                        color="gray"
                                        onClick={_handleShareAdvertise}
                                    >
                                        <LuShare2 size={20}/>
                                    </IconButton>
                                )
                            }

                            {
                                toolbar.delete && (
                                    <>

                                        <IconButton
                                            variant="text"
                                            color="red"
                                            onClick={_handleShowDeleteDialog}
                                        >
                                            <LuTrash2 size={20}/>
                                        </IconButton>

                                        <DeleteAdvertiseDialog
                                            id={1}
                                            isOpenDialog={isOpenDeleteDialog}
                                            onCloseDialog={_handleHideDeleteDialog}
                                        />

                                    </>
                                )
                            }

                        </div>
                    )
                }

            </article>

        </>
    )
}

export default AdvertiseCard;