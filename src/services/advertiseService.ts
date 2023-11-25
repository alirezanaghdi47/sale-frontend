// libraries
import axios from "axios";

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