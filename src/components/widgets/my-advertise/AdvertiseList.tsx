"use client";

// libraries
import dynamic from "next/dynamic";
import {useRouter} from "next/navigation";
import {useMutation, useQueryClient} from "@tanstack/react-query";

// components
import AdvertiseCard from "@/components/partials/AdvertiseCard";
const DeleteAdvertiseDialog = dynamic(() => import("@/components/partials/DeleteAdvertiseDialog"), {ssr: false});

// hooks
import {useDialog} from "@/hooks/useDialog";

// services
import {deleteMyAdvertiseService} from "@/services/myAdvertiseService";

// types
import {IAdvertise} from "@/types/global";

// utils
import {copyToClipboard} from "@/utils/functions";

const AdvertiseList = ({data}: { data: IAdvertise[] }) => {

    const router = useRouter();
    const queryClient = useQueryClient();

    const {
        dialogData,
        isOpenDialog: isOpenDeleteDialog,
        _handleShowDialog: _handleShowDeleteDialog,
        _handleHideDialog: _handleHideDeleteDialog
    } = useDialog();

    const {mutate, isPending} = useMutation({
        mutationFn: (data: string) => deleteMyAdvertiseService(data),
        onSuccess: async (data) => {
            const {notification} = await import("@/modules/Notification");

            if (data.status === "success") {
                queryClient.invalidateQueries({queryKey: ["allMyAdvertise"]});
                notification(data.message, "success");
            } else {
                notification(data.message, "error");
            }

            _handleHideDeleteDialog();
        }
    });

    const _handleDeleteFromFavorite = async () => {
        // @ts-ignore
        mutate(dialogData);
    }

    const _handleShareAdvertise = async (data: { title: string, url: string }) => {
        const {notification} = await import("@/modules/Notification");

        copyToClipboard(data).then(res => {
            if (res === "unSupported") {
                notification("کپی شد", "success");
            }
        });
    }

    return (
        <section className='flex flex-col justify-center items-start gap-y-4 w-full'>

            <ul className="grid grid-cols-12 gap-4 w-full">

                {
                    data.map(advertiseItem =>
                        <li
                            key={advertiseItem?._id}
                            className="col-span-12 md:col-span-6"
                        >
                            <AdvertiseCard
                                advertiseItem={advertiseItem}
                                toolbar={{
                                    delete: {
                                        onClick: () => _handleShowDeleteDialog(advertiseItem?._id)
                                    },
                                    edit: {
                                        onClick: () => router.push(`${process.env.BASE_URL}/account/my-advertises/${advertiseItem?._id}/edit`)
                                    },
                                    share: {
                                        onClick: () => _handleShareAdvertise({
                                            title: advertiseItem?.title,
                                            url: `${process.env.BASE_URL}/advertises/${advertiseItem?.slug}`,
                                        })
                                    },
                                }}
                            />
                        </li>
                    )
                }

            </ul>

            <DeleteAdvertiseDialog
                onDelete={() => _handleDeleteFromFavorite()}
                isOpenDialog={isOpenDeleteDialog}
                onCloseDialog={_handleHideDeleteDialog}
            />

        </section>
    )
}

export default AdvertiseList;