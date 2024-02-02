'use client';

// libraries
import {useSession} from "next-auth/react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {LuBookmark, LuBookmarkMinus, LuShare2,} from "react-icons/lu";

// modules
import {IconButton} from "@/modules/IconButton";

// services
import {addFavoriteService, deleteFavoriteService, getIsMyFavoriteService} from "@/services/favoriteService";

// types
import {IAdvertise} from "@/types/global";

// utils
import {copyToClipboard} from "@/utils/functions";

const Summary = ({data}: {data: IAdvertise}) => {

    const {data: session, status} = useSession();
    const queryClient = useQueryClient();

    const {isPending: isPendingMyFavorite, data: isMyFavoriteData} = useQuery({
        queryKey: ['isMyFavorite', {advertise: data?._id}],
        queryFn: () => getIsMyFavoriteService(data?._id),
        enabled: status === "authenticated"
    });

    const {mutate: mutateAddToFavorite} = useMutation({
        mutationFn: (data: string) => addFavoriteService(data),
        onSuccess: async (data) => {
            const {notification} = await import("@/modules/Notification");

            if (data.status === "success") {
                queryClient.invalidateQueries({queryKey: ["isMyFavorite"]});
                notification(data.message, "success");
            } else {
                notification(data.message, "error");
            }
        }
    });

    const {mutate: mutateDeleteFromFavorite} = useMutation({
        mutationFn: (data: string) => deleteFavoriteService(data),
        onSuccess: async (data) => {
            const {notification} = await import("@/modules/Notification");

            if (data.status === "success") {
                queryClient.invalidateQueries({queryKey: ["isMyFavorite"]});
                notification(data.message, "success");
            } else {
                notification(data.message, "error");
            }
        }
    });

    const _handleAddToFavorite = async (id: string) => {
        const {notification} = await import("@/modules/Notification");

        if (status !== "authenticated") {
            return notification("ابتدا وارد حساب کاربری خود شوید", "error");
        }

        mutateAddToFavorite(id);
    }

    const _handleDeleteFromFavorite = async (id: string) => {
        const {notification} = await import("@/modules/Notification");

        if (status !== "authenticated") {
            return notification("ابتدا وارد حساب کاربری خود شوید", "error");
        }

        mutateDeleteFromFavorite(id);
    }

    const _handleShareAdvertise = async (data: {title: string, url: string}) => {
        const {notification} = await import("@/modules/Notification");

        copyToClipboard(data).then(res => {
            if (res === "unSupported") {
                notification("کپی شد", "success");
            }
        });
    }

    return (
        <section className="flex justify-between items-start gap-x-2 w-full">

            <h1 className="text-base text-dark font-bold line-clamp-2 leading-8">
                {data?.title}
            </h1>

            <div className="flex justify-end items-center gap-x-4">

                <IconButton
                    variant="text"
                    color={!isMyFavoriteData?.data || status !== "authenticated" ? 'gray' : 'red'}
                    onClick={() => isMyFavoriteData?.data ? _handleDeleteFromFavorite(data?._id) : _handleAddToFavorite(data?._id)}
                >
                    {
                        (!isMyFavoriteData?.data || status !== "authenticated") ? (
                            <LuBookmark
                                size={16}
                                className="text-current"
                            />
                        ) : (
                            <LuBookmarkMinus
                                size={16}
                                className="text-current"
                            />
                        )
                    }
                </IconButton>

                <IconButton
                    variant="text"
                    color='gray'
                    onClick={() => _handleShareAdvertise({
                        title: data?.title,
                        url: `${process.env.BASE_URL}/advertises/${data?._id}`,
                    })}
                >
                    <LuShare2
                        size={16}
                        className="text-current"
                    />
                </IconButton>

            </div>

        </section>
    )
}

export default Summary;
