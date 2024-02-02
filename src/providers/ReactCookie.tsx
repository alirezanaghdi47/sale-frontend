"use client";

// libraries
import { CookiesProvider } from 'react-cookie';

// types
import {ReactCookieProviderType} from "@/types/providers";

const ReactCookie = (props:ReactCookieProviderType) => {

    return (
        <CookiesProvider>
            {props.children}
        </CookiesProvider>
    )
}

export default ReactCookie;