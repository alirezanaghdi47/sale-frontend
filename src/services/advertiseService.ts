// libraries
import axios from "axios";

export const getAllAdvertiseService = async (data) => {

    try {

        const {page = 1 , limit = 12 , sort = "newest" , search = "" , startPrice = 0 , endPrice = 1_000_000_000 , city , category } = data;

        const response = await axios.get(process.env.API_URL + "/api/advertise/getAllAdvertise" + `?page=${page}&limit=${limit}&sort=${sort}`);

        return response.data;

    } catch (err) {
        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };
    }

}

export const getAdvertiseService = async (advertiseId) => {

    try {

        const response = await axios.get(process.env.API_URL + "/api/advertise/getAdvertise", {
            headers: {
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