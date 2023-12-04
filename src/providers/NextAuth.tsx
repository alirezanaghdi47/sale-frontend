"use client";

// libraries
import {SessionProvider} from "next-auth/react";

const NextAuth = ({children}) => {

    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default NextAuth;