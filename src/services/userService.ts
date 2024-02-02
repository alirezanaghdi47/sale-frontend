// @ts-nocheck

// libraries
import axios from "axios";
import {getSession} from "next-auth/react";

// types
import {IEditPasswordService, IEditProfileService} from "@/types/services";

export const editProfileService = async (data: IEditProfileService) => {
    try {
        const session = await getSession();
        const formData = new FormData();

        formData.append("preview" , data.preview);
        formData.append("avatar" , data.avatar);
        formData.append("name" , data.name);
        formData.append("family" , data.family);
        formData.append("age" , data.age);

        const response = await axios.put(process.env.API_URL + "/api/user/editProfile" , formData , {
            headers:{token: session?.accessToken,}
        });

        return response.data;
    } catch (err: any) {
        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };
    }
}

export const editPasswordService = async (data: IEditPasswordService) => {
    try {
        const session = await getSession();

        const response = await axios.put(process.env.API_URL + "/api/user/editPassword" , data , {
            headers:{token: session?.accessToken}
        });

        return response.data;
    } catch (err: any) {
        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };
    }
}