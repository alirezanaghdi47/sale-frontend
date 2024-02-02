"use client";

// libraries
import {SessionProvider} from "next-auth/react";

// helpers
import AuthHandler from "@/helpers/AuthHandler";

// types
import {NextAuthProviderType} from "@/types/providers";

const NextAuth = (props: NextAuthProviderType) => {

    return (
        <SessionProvider refetchInterval={60}>
            {props.children}
            <AuthHandler/>
        </SessionProvider>
    )
}

export default NextAuth;