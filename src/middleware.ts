// libraries
import {withAuth} from "next-auth/middleware";

export default withAuth({
    callbacks: {
        authorized: ({req, token}) => {
            if (req.nextUrl.pathname.startsWith('/account')) {
                if (!token?.accessToken) return false;
                if (token?.user?.expire > Math.floor(Date.now() / 1000)) return true;
            }
            return true;
        }
    },
    pages: {
        signIn: "/auth/sign-in",
        error: "/auth/sign-in",
    }
});