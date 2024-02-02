// libraries
import axios from "axios";

// utils
import {ILoginService, IRegisterService} from "@/types/services";

export const registerService = async (data: IRegisterService) => {
    try {
        const response = await axios.post(process.env.API_URL + "/api/auth/register" , data);

        return response.data;
    } catch (err: any) {
        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };
    }
}

export const loginService = async (data: ILoginService) => {
    try {
        const response = await axios.post(process.env.API_URL + "/api/auth/login" , data);

        return response.data;
    } catch (err: any) {
        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };
    }
}