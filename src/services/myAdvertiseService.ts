// @ts-nocheck

// libraries
import axios from "axios";
import {getSession} from "next-auth/react";

// types
import {IAdvertiseFilter} from "@/types/global";

// utils
import {IAddMyAdvertise, IEditMyAdvertise} from "@/types/services";

export const addMyAdvertiseService = async (data: IAddMyAdvertise) => {
    try {
        const session = await getSession();
        const formData = new FormData();

        for (let i = 0; i < data.gallery.length; i++) {
            formData.append("gallery", data.gallery[i]);
        }
        formData.append("category", data.category);
        formData.append("quality", data.quality);
        formData.append("price", data.price);
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("city", data.city);
        formData.append("latitude", data.latitude);
        formData.append("longitude", data.longitude);

        const response = await axios.post(process.env.API_URL + "/api/myAdvertise/addMyAdvertise", formData, {
            headers: {token: session?.accessToken,}
        });

        return response.data;
    } catch (err: any) {
        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };
    }
}

export const editMyAdvertiseService = async ({data, id}: IEditMyAdvertise) => {
    try {
        const session = await getSession();
        const formData = new FormData();

        for (let i = 0; i < data.gallery.length; i++) {
            formData.append("gallery", data.gallery[i]);
        }
        formData.append("category", data.category);
        formData.append("quality", data.quality);
        formData.append("price", data.price);
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("city", data.city);
        formData.append("latitude", data.latitude);
        formData.append("longitude", data.longitude);

        const response = await axios.put(process.env.API_URL + "/api/myAdvertise/editMyAdvertise", formData, {
            headers: {token: session?.accessToken, advertiseId: id}
        });

        return response.data;
    } catch (err: any) {
        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };
    }
}

export const getAllMyAdvertiseService = async (data: IAdvertiseFilter) => {
    try {
        const session = await getSession();
        const {page, limit, sort} = data;

        const response = await axios.get(process.env.API_URL + "/api/myAdvertise/getAllMyAdvertise", {
            params: {page, limit, sort},
            headers: {token: session?.accessToken,}
        });

        return response.data;
    } catch (err: any) {
        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };
    }
}

export const getMyAdvertiseService = async (id: string | string[]) => {
    try {
        const session = await getSession();

        const response = await axios.get(process.env.API_URL + "/api/myAdvertise/getMyAdvertise", {
            headers: {
                token: session?.accessToken,
                advertiseId: id
            }
        });

        return response.data;
    } catch (err: any) {
        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };
    }
}

export const deleteMyAdvertiseService = async (id: string) => {
    try {
        const session = await getSession();

        const response = await axios.delete(process.env.API_URL + "/api/myAdvertise/deleteMyAdvertise", {
            headers: {
                token: session?.accessToken,
                advertiseId: id
            }
        });

        return response.data;
    } catch (err: any) {
        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };
    }
}