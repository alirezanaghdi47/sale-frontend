// libraries
import NextAuth from "next-auth";

interface IUser {
    id: string,
    name: string | null,
    family: string | null,
    avatar: string | null,
    phoneNumber: string,
    age: string | null,
}

declare module "next-auth" {
    interface Session {
        accessToken: string | null,
        user: IUser
    }

    interface User{
        accessToken: string | null,
        user: IUser
    }
}

declare module "next-auth/jwt"{
    interface JWT {
        accessToken: string | null,
        user: IUser
    }
}