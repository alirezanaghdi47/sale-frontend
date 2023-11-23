// libraries
import {LuCalendar, LuInfo, LuLock, LuMonitor, LuPen, LuPhone} from "react-icons/lu";

export const cityList = [
    {id: "1", title: "تهران", value: "tehran"},
    {id: "2", title: "مشهد", value: "mashhad"},
    {id: "3", title: "اصفهان", value: "isfahan"},
    {id: "4", title: "اردبیل", value: "ardabil"},
    {id: "5", title: "قم", value: "qom"},
    {id: "6", title: "شیراز", value: "shiraz"},
    {id: "7", title: "کیش", value: "kish"},
    {id: "8", title: "لرستان", value: "lorestan"},
    {id: "9", title: "اهواز", value: "ahvaz"},
    {id: "10", title: "گیلان", value: "guilan"},
];

export const categoryList = [
    {id: "1", label: "موبایل", value: "mobile", icon: LuPhone({size: 20})},
    {id: "2", label: "لپتاپ", value: "laptop", icon: LuMonitor({size: 20})},
];

export const qualityList = [
    {id: "1", label: "نو", value: "new"},
    {id: "2", label: "در حد نو", value: "like-new"},
    {id: "3", label: "سالم", value: "healthy"},
    {id: "4", label: "کارکرده", value: "worked"},
    {id: "5", label: "خراب", value: "broken"},
];

export const mobileCategorySpecificationList = [
    {id: "1", title: "برند" , value: "brand"},
    {id: "2", title: "ابعاد صفحه نمایش" , value: "screen"},
    {id: "3", title: "سیستم عامل" , value: "os"},
    {id: "4", title: "تعداد دوربین" , value: "camera"},
    {id: "5", title: "ظرفیت باتری" , value: "battery"},
];

export const laptopCategorySpecificationList = [
    {id: "1", title: "برند" , value: "brand"},
    {id: "2", title: "ابعاد صفحه نمایش" , value: "screen"},
    {id: "3", title: "سیستم عامل" , value: "os"},
    {id: "4", title: "سی پی یو" , value: "cpu"},
    {id: "5", title: "رم" , value: "ram"},
    {id: "6", title: "گرافیک" , value: "gpu"},
    {id: "7", title: "ظرفیت باتری" , value: "battery"},
    {id: "8", title: "وزن دستگاه" , value: "weight"},
];

export const sessionList = [
    {id: "1", ip: "192.168.1.1", country: "ایران", city: "تهران", browser: "chrome 117", device: "mobile", createDate: "12:12 | 1400/12/12"},
    {id: "2", ip: "192.168.1.2", country: "ترکیه", city: "استانبول", browser: "firefox 117", device: "desktop", createDate: "14:14 | 1400/12/12"},
];

export const dayList = [
    {id: "1", label: "1", value: "1"},
    {id: "2", label: "2", value: "2"},
    {id: "3", label: "3", value: "3"},
    {id: "4", label: "4", value: "4"},
    {id: "5", label: "5", value: "5"},
    {id: "6", label: "6", value: "6"},
    {id: "7", label: "7", value: "7"},
    {id: "8", label: "8", value: "8"},
    {id: "9", label: "9", value: "9"},
    {id: "10", label: "10", value: "10"},
    {id: "11", label: "11", value: "11"},
    {id: "12", label: "12", value: "12"},
    {id: "13", label: "13", value: "13"},
    {id: "14", label: "14", value: "14"},
    {id: "15", label: "15", value: "15"},
    {id: "16", label: "16", value: "16"},
    {id: "17", label: "17", value: "17"},
    {id: "18", label: "18", value: "18"},
    {id: "19", label: "19", value: "19"},
    {id: "20", label: "20", value: "20"},
    {id: "21", label: "21", value: "21"},
    {id: "22", label: "22", value: "22"},
    {id: "23", label: "23", value: "23"},
    {id: "24", label: "24", value: "24"},
    {id: "25", label: "25", value: "25"},
    {id: "26", label: "26", value: "26"},
    {id: "27", label: "27", value: "27"},
    {id: "28", label: "28", value: "28"},
    {id: "29", label: "29", value: "29"},
    {id: "30", label: "30", value: "30"},
    {id: "31", label: "31", value: "31"},
];

export const monthList = [
    {id: "1", label: "1", value: "1"},
    {id: "2", label: "2", value: "2"},
    {id: "3", label: "3", value: "3"},
    {id: "4", label: "4", value: "4"},
    {id: "5", label: "5", value: "5"},
    {id: "6", label: "6", value: "6"},
    {id: "7", label: "7", value: "7"},
    {id: "8", label: "8", value: "8"},
    {id: "9", label: "9", value: "9"},
    {id: "10", label: "10", value: "10"},
    {id: "11", label: "11", value: "11"},
    {id: "12", label: "12", value: "12"},
];

export const yearList = [
    {id: "1", label: "1385", value: "1385"},
    {id: "2", label: "1384", value: "1384"},
    {id: "3", label: "1383", value: "1383"},
    {id: "4", label: "1382", value: "1382"},
    {id: "5", label: "1381", value: "1381"},
    {id: "6", label: "1380", value: "1380"},
    {id: "7", label: "1379", value: "1379"},
    {id: "8", label: "1378", value: "1378"},
    {id: "9", label: "1377", value: "1377"},
    {id: "10", label: "1376", value: "1376"},
    {id: "11", label: "1375", value: "1375"},
    {id: "12", label: "1374", value: "1374"},
    {id: "13", label: "1373", value: "1373"},
    {id: "14", label: "1372", value: "1372"},
    {id: "15", label: "1371", value: "1371"},
    {id: "16", label: "1370", value: "1370"},
];

export const profileTabList = [
    {id: 1, title: "اطلاعات کاربری", value: "user-information", icon: LuInfo({size: 20})},
    {id: 2, title: "ویرایش اطلاعات", value: "edit-information", icon: LuPen({size: 20})},
    {id: 3, title: "تغییر رمز عبور", value: "edit-password", icon: LuLock({size: 20})},
    {id: 4, title: "تاریخچه ورود", value: "session-history", icon: LuCalendar({size: 20})},
];

export const addEditAdvertiseStepList = [
    {id: 1, title: "گالری"},
    {id: 2, title: "جزییات"},
    {id: 3, title: "فروشنده"},
];