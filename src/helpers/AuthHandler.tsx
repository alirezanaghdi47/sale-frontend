// libraries
import {useEffect} from "react";
import {signOut, useSession} from "next-auth/react";

const AuthHandler = () => {
    const {data: session} = useSession();

    useEffect(() => {
        // @ts-ignore
        if (session && (session?.user?.expire < Math.floor(Date.now() / 1000))) {
            signOut({callbackUrl: "/auth/sign-in"});
        }
    } , [session]);

    return null;
}

export default AuthHandler;