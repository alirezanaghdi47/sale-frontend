"use client";

// libraries
import {useState} from "react";
import {SessionProvider} from "next-auth/react";

// helpers
import AuthHandler from "@/helpers/AuthHandler";

const NextAuth = ({children}) => {

    const [interval , setInterval] = useState(0);

    return (
        <SessionProvider refetchInterval={interval}>
            {children}
            <AuthHandler setInterval={setInterval}/>
        </SessionProvider>
    )
}

export default NextAuth;