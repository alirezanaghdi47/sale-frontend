// libraries
import axios from "axios";

export const loginService = async (data) => {

    try {

        const response = await axios.post(process.env.API_URL + "/api/auth/login" , data);

        return response.data;

    } catch (err) {

        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };

    }

}

export const registerService = async (data) => {

    try {

        const response = await axios.post(process.env.API_URL + "/api/auth/register" , data);

        return response.data;

    } catch (err) {

        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };

    }

}