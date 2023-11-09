// utils
import {laptopCategorySpecificationList, mobileCategorySpecificationList} from "@/utils/constants";

export const copyToClipboard = (text) => {
    return new Promise((resolve, reject) => {
        return navigator.clipboard.writeText(text)
            .then(res => resolve("کپی شد"))
            .catch(err => reject("کپی نشد"));
    })
}

export const getSpecificationByCategory = (category) => {
    switch (category) {
        case "mobile":
            return mobileCategorySpecificationList;
        case "laptop":
            return laptopCategorySpecificationList;
        default:
            return null;
    }
}

export const generateSpecificationFormByCategory = (category , data) => {
    return getSpecificationByCategory(category)?.reduce((accumulator, currentValue) =>
        (accumulator[currentValue.value] = data[currentValue.value] ? data[currentValue.value] : "", accumulator),
        {}
    );
}