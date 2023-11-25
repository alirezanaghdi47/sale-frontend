// libraries
import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";
import JwtDecode from "jwt-decode";

export const middleware = async (request: NextRequest) => {

    const token = request.cookies.get("accessToken")?.value;
    const decodedToken = token ? JwtDecode(token) : null;

    if (request.nextUrl.pathname.startsWith("/account") && (!token || Date.now() > decodedToken?.exp * 1000)){

        request.cookies.delete("accessToken");
        const response = NextResponse.redirect(new URL("/auth/sign-in" , request.url));
        response.cookies.delete("accessToken");

        return response;

    }

    if (request.nextUrl.pathname.startsWith("/auth") && token && Date.now() < decodedToken?.exp * 1000){
        return NextResponse.redirect(new URL("/account/profile" , request.url));
    }

}