// libraries
import axios from "axios";

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

export const confirmRegisterService = async (data) => {

    try {

        const response = await axios.post(process.env.API_URL + "/api/auth/confirmRegister" , data);

        return response.data;

    } catch (err) {

        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };

    }

}

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

export const forgetPasswordService = async (data) => {

    try {

        const response = await axios.post(process.env.API_URL + "/api/auth/forgetPassword" , data);

        return response.data;

    } catch (err) {

        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };

    }

}

export const verifyPasswordService = async (data) => {

    try {

        const response = await axios.post(process.env.API_URL + "/api/auth/verifyPassword" , {newPassword: data.newPassword} , {
            headers:{
                token: data.token,
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