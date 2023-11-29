// libraries
import axios from "axios";
import Cookie from "js-cookie";

export const addMyAdvertiseService = async (data) => {

    try {

        const token = Cookie.get("accessToken");
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
                token,
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

        const token = Cookie.get("accessToken");
        const {page, limit, sort} = data;

        const response = await axios.get(process.env.API_URL + "/api/myAdvertise/getAllMyAdvertise", {
            params: {
                page, limit, sort
            },
            headers: {
                token,
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

        const token = Cookie.get("accessToken");

        const response = await axios.delete(process.env.API_URL + "/api/myAdvertise/deleteMyAdvertise", {
            headers: {
                token,
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