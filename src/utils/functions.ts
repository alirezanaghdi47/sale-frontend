// helpers
import notification from "@/helpers/notification";

export const getTitleFromPathname = (pathname) => {
    switch (pathname) {
        case "/account/dashboard":
            return "داشبورد"
        case "/account/my-advertises":
            return "آگهی های من"
        case "/account/favorites":
            return "علاقه مندی ها"
        case "/account/profile":
            return "پروفایل"
    }
}

export const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(res => notification("کپی شد" , "success"))
        .catch(err => notification("کپی نشد" , "error"));
}