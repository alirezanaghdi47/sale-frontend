// libraries
import axios from "axios";
import {getSession} from "next-auth/react";

export const addFavoriteService = async (advertiseId) => {

    try {

        const session = await getSession();

        const response = await axios.post(process.env.API_URL + "/api/favorite/addFavorite", null, {
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

export const getAllFavoriteService = async (data) => {

    try {

        const session = await getSession();
        const {page , limit , sort} = data;

        const response = await axios.get(process.env.API_URL + "/api/favorite/getAllFavorite", {
            params:{
                page , limit , sort
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

export const getIsMyFavoriteService = async (advertiseId) => {

    try {

        const session = await getSession();

        const response = await axios.get(process.env.API_URL + "/api/favorite/getIsMyFavorite", {
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

export const deleteFavoriteService = async (advertiseId) => {

    try {

        const session = await getSession();

        const response = await axios.delete(process.env.API_URL + "/api/favorite/deleteFavorite", {
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