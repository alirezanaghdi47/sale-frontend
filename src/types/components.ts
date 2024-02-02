// libraries
import React from "react";

// types
import {IAdvertise} from "@/types/global";

export type AdvertisesAdvertiseListType = {
    pages: [IAdvertise[]],
    pageParams: any
}


export type AddAdvertiseDetailType = {
    data: any,
    setData: (data: any) => void,
    onPrev: () => void,
    onNext: () => void
}

export type AddAdvertiseGalleryType = {
    data: any,
    setData: (data: any) => void,
    onCancel: () => void,
    onNext: () => void
}

export type AddAdvertiseVendorType = {
    data: any,
    setData: (data: any) => void,
    onPrev: () => void,
    onSubmit: () => void
}

export type FilterModalType = {
    isOpenModal: boolean,
    onCloseModal: () => void
}

export type EditAdvertiseDetailType = {
    data: any,
    setData: (data: any) => void,
    onPrev: () => void,
    onNext: () => void
}

export type EditAdvertiseGalleryType = {
    data: any,
    setData: (data: any) => void,
    onCancel: () => void,
    onNext: () => void
}

export type EditAdvertiseVendorType = {
    data: any,
    setData: (data: any) => void,
    onPrev: () => void,
    onSubmit: () => void
}

export type MapType = {
    location?: [number, number]
    setLocation?: (data: { latitude: number, longitude: number }) => void
}

export type SortBarType = {
    totalCount: number,
    sort: "newest" | "expensive" | string,
    _handleChangeSort: (data: string) => any
}

export type AdvertiseCardType = {
    advertiseItem: IAdvertise,
    toolbar: {
        share?: {
            onClick: () => void
        },
        edit?: {
            onClick: () => void
        },
        delete?: {
            onClick: () => void
        },
    } | boolean
}

export type CitiesModalType = {
    isOpenModal: boolean,
    onCloseModal: () => void
}

export type DeleteAdvertiseDialogType = {
    isOpenDialog: boolean,
    onCloseDialog: () => void,
    onDelete: () => void
}

export type SortModalType = {
    sort: string | null,
    _handleChangeSort: (data: any) => any,
    isOpenModal: boolean,
    onCloseModal: () => void
}