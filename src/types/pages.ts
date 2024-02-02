// types
import {IAdvertiseFilter} from "@/types/global";

export type EditMyAdvertisePageType = {
    advertiseId: string
}

export type AdvertisePageType = {
    params: {
        advertiseSlug: string
    }
}

export type AdvertisesPageType = {
    searchParams: IAdvertiseFilter
}