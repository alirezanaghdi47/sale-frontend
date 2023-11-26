// libraries
import axios from "axios";
import Cookie from "js-cookie";

export const addFavoriteService = async (advertiseId) => {

    try {

        const token = Cookie.get("accessToken");

        const response = await axios.post(process.env.API_URL + "/api/favorite/addFavorite", null, {
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

export const getAllFavoriteService = async (data) => {

    try {

        const token = Cookie.get("accessToken");
        const {page , limit , sort} = data;

        const response = await axios.get(process.env.API_URL + "/api/favorite/getAllFavorite" + `?page=${page}&limit=${limit}&sort=${sort}`, {
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