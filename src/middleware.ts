// libraries
import { withAuth } from "next-auth/middleware";

export default withAuth({
    callbacks: {
        authorized: ({ req, token }) => {
            if (req.nextUrl.pathname.startsWith('/account') && ((token?.accessToken && token?.exp * 1000 < Date.now()) || (!token?.accessToken && !token?.user?.id))) {
                return false;
            }
            return true;
        }
    },
    pages:{
        signIn: "/auth/sign-in",
        error: "/auth/sign-in",
    }
});