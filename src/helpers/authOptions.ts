// libraries
import {NextAuthOptions} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {jwtDecode} from "jwt-decode";

// services
import {loginService} from "@/services/authService";

export const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: {label: "email"},
                password: {label: "password"}
            },
            async authorize(credentials, req) {

                const response = await loginService({
                    email: credentials.email,
                    password: credentials.password
                });

                if (response.status === "success") {
                    return {
                        accessToken: response.token,
                        user: jwtDecode(response.token)?.user
                    };
                } else {
                    return Promise.reject(new Error(response?.message));
                }

            },
        })
    ],
    callbacks: {
        jwt: async ({token, user, account, session, profile, trigger}) => {

            if (user) {
                token.accessToken = user.accessToken;
                token.user = user.user;
            }

            if (trigger === "update") {
                token.user.avatar = session.avatar;
                token.user.name = session.name;
                token.user.family = session.family;
                token.user.phoneNumber = session.phoneNumber;
            }

            return token;

        },
        session: async ({session, token, user, newSession, trigger}) => {

            session.accessToken = token.accessToken;
            session.user = token.user;

            if (trigger === "update") {
                session.user.avatar = newSession.avatar ?? token.user.avatar;
                session.user.name = newSession.name ?? token.user.name;
                session.user.family = newSession.family ?? token.user.family;
                session.user.phoneNumber = newSession.phoneNumber ?? token.user.phoneNumber;
            }

            return session;

        }
    },
    session: {strategy: "jwt"},
    debug: process.env.NODE_ENV === "development",
}