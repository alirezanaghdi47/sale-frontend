// libraries
import {LuInfo, LuLock, LuPen} from "react-icons/lu";

export const cityList = [
    {id: "1", label: "تهران", value: "tehran"},
    {id: "2", label: "مشهد", value: "mashhad"},
    {id: "3", label: "اصفهان", value: "isfahan"},
    {id: "4", label: "اردبیل", value: "ardabil"},
    {id: "5", label: "قم", value: "qom"},
    {id: "6", label: "شیراز", value: "shiraz"},
    {id: "7", label: "کیش", value: "kish"},
    {id: "8", label: "لرستان", value: "lorestan"},
    {id: "9", label: "اهواز", value: "ahvaz"},
    {id: "10", label: "گیلان", value: "guilan"},
];

export const categoryList = [
    {id: "1", label: "موبایل", value: "mobile"},
    {id: "2", label: "لپتاپ", value: "laptop"},
];

export const qualityList = [
    {id: "1", label: "نو", value: "new"},
    {id: "2", label: "در حد نو", value: "like-new"},
    {id: "3", label: "سالم", value: "healthy"},
    {id: "4", label: "کارکرده", value: "worked"},
    {id: "5", label: "خراب", value: "broken"},
];

export const profileTabList = [
    {id: 1, title: "اطلاعات کاربری", value: "user-information", icon: LuInfo({size: 20})},
    {id: 2, title: "ویرایش اطلاعات", value: "edit-information", icon: LuPen({size: 20})},
    {id: 3, title: "تغییر رمز عبور", value: "edit-password", icon: LuLock({size: 20})},
];

export const addEditAdvertiseStepList = [
    {id: 1, title: "گالری"},
    {id: 2, title: "جزییات"},
    {id: 3, title: "فروشنده"},
];

export const sortList = [
    {id: "1", label: "جدید ترین", value: "newest"},
    {id: "2", label: "گران ترین", value: "expensive"},
];