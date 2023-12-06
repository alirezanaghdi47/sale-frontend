// libraries
import axios from "axios";
import {getSession} from "next-auth/react";

export const addMyAdvertiseService = async (data) => {

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
            headers: {
                token: session?.accessToken,
            }
        });

        return response.data;

    } catch (err) {

        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };

    }

}

export const editMyAdvertiseService = async ({data , advertiseId}) => {

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
            headers: {
                token: session?.accessToken,
                advertiseId: advertiseId
            }
        });

        return response.data;

    } catch (err) {

        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };

    }

}

export const getAllMyAdvertiseService = async (data) => {

    try {

        const session = await getSession();
        const {page, limit, sort} = data;

        const response = await axios.get(process.env.API_URL + "/api/myAdvertise/getAllMyAdvertise", {
            params: {
                page, limit, sort
            },
            headers: {
                token: session?.accessToken,
            }
        });

        return response.data;

    } catch (err) {

        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };

    }

}

export const getMyAdvertiseService = async (advertiseId) => {

    try {

        const session = await getSession();

        const response = await axios.get(process.env.API_URL + "/api/myAdvertise/getMyAdvertise", {
            headers: {
                token: session?.accessToken,
                advertiseId,
            }
        });

        return response.data;

    } catch (err) {

        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };

    }

}

export const deleteMyAdvertiseService = async (advertiseId) => {

    try {

        const session = await getSession();

        const response = await axios.delete(process.env.API_URL + "/api/myAdvertise/deleteMyAdvertise", {
            headers: {
                token: session?.accessToken,
                advertiseId: advertiseId
            }
        });

        return response.data;

    } catch (err) {

        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };

    }

}