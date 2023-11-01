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
    return new Promise((resolve, reject) => {
        return navigator.clipboard.writeText(text)
            .then(res => resolve("کپی شد"))
            .catch(err => reject("کپی نشد"));
    })
}