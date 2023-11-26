"use client";

// libraries
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {formatDistance} from "date-fns";
import {faIR} from 'date-fns/locale';
import {LuDot, LuPen, LuShare2, LuTrash2} from "react-icons/lu";

// components
import {IconButton} from "@/components/modules/IconButton";

const DeleteAdvertiseDialog = dynamic(() => import("@/components/partials/DeleteAdvertiseDialog"), {ssr: false});

// hooks
import {useDialog} from "@/hooks/useDialog";

// services
import {deleteMyAdvertiseService} from "@/services/myAdvertiseService";

// utils
import {cityList, qualityList} from "@/utils/constants";
import {copyToClipboard} from "@/utils/functions";

const AdvertiseCard = ({advertiseItem, toolbar, disabled}) => {

    const queryClient = useQueryClient();

    const {mutate, isPending} = useMutation({
        mutationFn: (data) => deleteMyAdvertiseService(data),
        onSuccess: async (data) => {
            const {notification} = await import("@/components/modules/Notification");

            if (data.status === "success") {
                queryClient.invalidateQueries({queryKey: ["allMyAdvertise"]});
                notification(data.message, "success");
            } else {
                notification(data.message, "error");
            }
        }
    });

    const {
        isOpenDialog: isOpenDeleteDialog,
        _handleShowDialog: _handleShowDeleteDialog,
        _handleHideDialog: _handleHideDeleteDialog
    } = useDialog();

    const _handleDeleteAdvertise = async (advertiseId) => {
        mutate(advertiseId);
    }

    const _handleEditAdvertise = async () => {

    }

    const _handleShareAdvertise = async (link) => {
        const {notification} = await import("@/components/modules/Notification");
        return copyToClipboard(link)
            .then(res => notification(res, "success"))
            .catch(err => notification(err, "error"));
    }

    return (
        <>
            <article className="relative flex justify-start items-center gap-x-4 bg-light rounded-lg p-4">

                {/*{*/}
                {/*    disabled && (*/}
                {/*        <div*/}
                {/*            className="absolute top-0 left-0 z-10 flex justify-center items-center w-full h-full bg-light/90 rounded-lg">*/}
                {/*            <span className="bg-secondary text-gray font-bold rounded-lg px-4 py-2">*/}
                {/*                {disabled?.message}*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*}*/}

                <Link
                    className="flex justify-center items-center"
                    href={`${process.env.BASE_URL}/advertises/${advertiseItem?._id}`}
                >
                    <Image
                        src={advertiseItem?.gallery[0]}
                        alt="advertise"
                        width={120}
                        height={120}
                        className="min-w-[120px] min-h-[120px] object-cover object-center rounded-lg"
                    />
                </Link>

                <div className="flex flex-col justify-center items-start gap-y-4 w-full">

                    <Link
                        className="flex flex-col justify-center items-start w-full"
                        href={`${process.env.BASE_URL}/advertises/${advertiseItem?._id}`}
                    >
                        <h3 className="text-sm font-bold text-gray line-clamp-1">
                            {advertiseItem?.title}
                        </h3>
                    </Link>

                    <div className="flex flex-col justify-center items-start gap-y-2 w-full">

                        <span className="w-full text-xs text-gray line-clamp-1">
                            {qualityList.find(qualityItem => qualityItem.value === advertiseItem?.quality)?.label}
                        </span>

                        <span className="flex justify-start items-center w-full text-xs text-gray line-clamp-1">
                            {advertiseItem?.price.toLocaleString()}
                            &nbsp;
                            تومان
                        </span>

                        <span className="flex justify-start items-center w-full text-xs text-gray line-clamp-1">
                            {formatDistance(new Date(advertiseItem?.createdAt), new Date(), {addSuffix: true, locale: faIR})}
                            <LuDot
                                size={20}
                                className="text-current"
                            />
                            {cityList.find(cityItem => cityItem.value === advertiseItem?.city)?.label}
                        </span>

                    </div>

                </div>

                {
                    toolbar && (

                        <div className="flex flex-col justify-start items-start gap-y-2 mb-auto">

                            {
                                toolbar.share && (
                                    <IconButton
                                        variant="text"
                                        color="gray"
                                        onClick={() => _handleShareAdvertise(`${process.env.BASE_URL}/advertises/${advertiseItem?._id}`)}
                                    >
                                        <LuShare2 size={20}/>
                                    </IconButton>
                                )
                            }

                            {
                                toolbar.edit && (
                                    <IconButton
                                        variant="text"
                                        color="yellow"
                                        onClick={() => _handleEditAdvertise(advertiseItem?._id)}
                                    >
                                        <LuPen size={20}/>
                                    </IconButton>
                                )
                            }

                            {
                                toolbar.delete && (
                                    <IconButton
                                        variant="text"
                                        color="red"
                                        onClick={_handleShowDeleteDialog}
                                    >
                                        <LuTrash2 size={20}/>
                                    </IconButton>
                                )
                            }

                        </div>
                    )
                }

                <DeleteAdvertiseDialog
                    onDelete={() => _handleDeleteAdvertise(advertiseItem?._id)}
                    isOpenDialog={isOpenDeleteDialog}
                    onCloseDialog={_handleHideDeleteDialog}
                />

            </article>

        </>
    )
}

export default AdvertiseCard;