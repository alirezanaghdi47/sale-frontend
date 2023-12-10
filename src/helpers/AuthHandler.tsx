// libraries
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {signOut, useSession} from "next-auth/react";

const AuthHandler = ({setInterval}) => {

    const router = useRouter();
    const {data: session} = useSession();

    useEffect(() => {

        if (session) {

            setInterval(prevState => prevState + 1);

            if (session?.user?.expire * 1000 < Date.now()) {
                signOut({callbackUrl: "/auth/sign-in"});
            }

        }

    }, [session, router]);

    return null;
}

export default AuthHandler;