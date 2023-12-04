"use client";

// libraries
import { CookiesProvider } from 'react-cookie';

const ReactCookie = ({children}) => {

    return (
        <CookiesProvider>
            {children}
        </CookiesProvider>
    )
}

export default ReactCookie;