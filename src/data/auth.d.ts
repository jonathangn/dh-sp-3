import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface Session {
        user?: {
            user?: {
                dni?: string,
                first_name?: string,
                last_name?: string,
                email?: string,
                Role?: string
            }
        } & DefaultSession["user"]
    }
}
