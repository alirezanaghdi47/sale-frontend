// libraries
import {BsInstagram, BsTelegram, BsTwitter, BsWhatsapp} from "react-icons/bs";
import {FiFilePlus, FiHome, FiMessageCircle, FiPlus, FiUser} from "react-icons/fi";

export const cityList = [
    {id: "1", title: "تهران",value: "tehran"},
    {id: "2", title: "مشهد",value: "mashhad"},
    {id: "3", title: "اصفهان",value: "isfahan"},
    {id: "4", title: "اردبیل",value: "ardabil"},
    {id: "5", title: "قم",value: "qom"},
    {id: "6", title: "شیراز",value: "shiraz"},
    {id: "7", title: "کیش",value: "kish"},
    {id: "8", title: "لرستان",value: "lorestan"},
    {id: "9", title: "اهواز",value: "ahvaz"},
    {id: "10", title: "گیلان",value: "guilan"},
];

export const socialMediaList = [
    {id: "1" , href: "telegram" , icon: BsTelegram({size: 20})},
    {id: "2" , href: "instagram" , icon: BsInstagram({size: 20})},
    {id: "3" , href: "whatsapp" , icon: BsWhatsapp({size: 20})},
    {id: "4" , href: "twitter" , icon: BsTwitter({size: 20})},
];

export const footerLinkList = [
    {id: "1" , title: "درباره ما" , href: "about-us"},
    {id: "2" , title: "پشتیبانی" , href: "support"},
];

export const headerLinkList = [
    {id: "1" , title: "چت ها" , href: "account/chat" , icon: FiMessageCircle({size: 20})},
    {id: "2" , title: "پروفایل" , href: "account/profile" , icon: FiUser({size: 20})},
    {id: "3" , title: "ثبت آگهی" , href: "account/add-advertise" , icon: FiPlus({size: 20})},
];

export const bottomNavigationLinkList = [
    {id: "1" , title: "خانه" , href: "" , icon: FiHome({size: 20})},
    {id: "2" , title: "ثبت آگهی" , href: "account/add-advertise" , icon: FiPlus({size: 20})},
    {id: "3" , title: "چت ها" , href: "account/chat" , icon: FiMessageCircle({size: 20})},
    {id: "4" , title: "پروفایل" , href: "account/profile" , icon: FiUser({size: 20})},
];