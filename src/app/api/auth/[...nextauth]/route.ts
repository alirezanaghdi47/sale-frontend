// libraries
import NextAuth from "next-auth";

// helpers
import {authOptions} from "@/helpers/authOptions";

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};