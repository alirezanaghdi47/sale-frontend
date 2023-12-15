// libraries
import { withAuth } from "next-auth/middleware";

export default withAuth({
    callbacks: {
        authorized: ({ req, token }) => {
            if (req.nextUrl.pathname.startsWith('/account') && (token?.user?.expire < Math.floor(Date.now() / 1000) || !token?.accessToken)) {
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