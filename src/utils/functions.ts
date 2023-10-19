export const getTitleFromPathname = (pathname) => {
    switch (pathname){
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