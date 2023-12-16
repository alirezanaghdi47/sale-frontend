"use client";

// libraries
import {SessionProvider} from "next-auth/react";

// helpers
import AuthHandler from "@/helpers/AuthHandler";

const NextAuth = ({children}) => {

    return (
        <SessionProvider refetchInterval={60}>
            {children}
            <AuthHandler/>
        </SessionProvider>
    )
}

export default NextAuth;