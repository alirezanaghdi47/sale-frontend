// libraries
import axios from "axios";
import Cookie from "js-cookie";

export const editProfileService = async (data) => {

    try {

        const token = Cookie.get("accessToken");
        const formData = new FormData();

        formData.append("avatar" , data.avatar);
        formData.append("name" , data.name);
        formData.append("family" , data.family);
        formData.append("phoneNumber" , data.phoneNumber);

        const response = await axios.put(process.env.API_URL + "/api/user/editProfile" , formData , {
            headers:{
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

export const editPasswordService = async (data) => {

    try {

        const token = Cookie.get("accessToken");

        const response = await axios.put(process.env.API_URL + "/api/user/editPassword" , data , {
            headers:{
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