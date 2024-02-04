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
            // @ts-ignore
            async authorize(credentials: any, req) {
                const response = await loginService({
                    phoneNumber: credentials.phoneNumber,
                    password: credentials.password
                });

                if (response.status === "success") {
                    return {
                        accessToken: response.token,
                        // @ts-ignore
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
                token.accessToken = user.accessToken;
                token.user = user.user;
            }

            return token;
        },
        session: async ({session, token, user, newSession, trigger}) => {
            session.accessToken = token.accessToken;
            session.user = token.user;

            if (trigger === "update") {
                session.accessToken = token.accessToken;
                session.user.avatar = newSession.avatar ?? token.user.avatar;
                session.user.name = newSession.name ?? token.user.name;
                session.user.family = newSession.family ?? token.user.family;
                session.user.age = newSession.age ?? token.user.age;
            }

            return session;
        }
    },
    session: {strategy: "jwt"},
    debug: process.env.NODE_ENV === "development",
}