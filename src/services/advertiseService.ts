// libraries
import axios from "axios";

// types
import {IAdvertiseFilter} from "@/types/global";

export const getAllAdvertiseService = async (data: IAdvertiseFilter) => {
    try {
        const {
            page = 1,
            limit = 6,
            sort = "newest",
            search = "",
            startPrice = 0,
            endPrice = 100_000_000,
            city,
            category
        } = data;

        const response = await axios.get(process.env.API_URL + "/api/advertise/getAllAdvertise", {
            params: {page, limit, sort, search, startPrice, endPrice, city, category}
        });

        return response.data;
    } catch (err: any) {
        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };
    }
}

export const getAdvertiseService = async (slug: string) => {
    try {
        const response = await axios.get(process.env.API_URL + "/api/advertise/getAdvertise", {
            headers: {advertiseSlug: slug}
        });

        return response.data;
    } catch (err: any) {
        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };
    }
}

export const getRelativeAdvertiseService = async (slug: string) => {
    try {
        const response = await axios.get(process.env.API_URL + "/api/advertise/getRelativeAdvertise", {
            headers: {advertiseSlug: slug}
        });

        return response.data;
    } catch (err: any) {
        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };
    }
}