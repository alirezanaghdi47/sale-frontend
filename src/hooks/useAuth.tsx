// libraries
import {useLayoutEffect, useState} from "react";
import {useRouter} from "next/navigation";
import Cookie from "js-cookie";
import JwtDecode from "jwt-decode";

export const useAuth = () => {

    const router = useRouter();
    const [isAuth , setIsAuth] = useState(false);
    const [user , setUser] = useState(null);

    const _handleLogin = (token) => {
        Cookie.set("accessToken", token, {sameSite: "strict", expires: 24 * 60 * 60 * 1000});
        setIsAuth(true);
        setUser(JwtDecode(token)?.user);
    }

    const _handleLogout = () => {
        Cookie.remove("accessToken");
        setIsAuth(false);
        setUser(null);
        router.push("/");
    }

    const _handleUpdate = (token) => {
        Cookie.set("accessToken", token, {sameSite: "strict", expires: 24 * 60 * 60 * 1000});
        setIsAuth(true);
        setUser(JwtDecode(token)?.user);
        router.push("/");
    }

    useLayoutEffect(() => {
        if (Cookie.get("accessToken")){
            setIsAuth(true);
            setUser(JwtDecode(Cookie.get("accessToken"))?.user);
        }
    }, []);

    return {
        isAuth,
        user,
        _handleLogin,
        _handleLogout,
        _handleUpdate
    }

}

