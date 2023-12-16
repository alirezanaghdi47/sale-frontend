// libraries
import {signOut, useSession} from "next-auth/react";

const AuthHandler = () => {

    const {data: session} = useSession();

    if (session?.user?.expire < Math.floor(Date.now() / 1000)) {
        signOut({callbackUrl: "/auth/sign-in"});
    }

    return null;
}

export default AuthHandler;