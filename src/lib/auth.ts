import type { NextAuthOptions } from "next-auth";
import { decode, encode } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    jwt: { encode, decode },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Correo Electrónico",
                },
                password: { label: "Contraseña", type: "password" },
            },
            async authorize(credentials, req) {
                const res = await fetch("http://3.90.34.20:8080/berebere/users/login", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        Email: credentials?.email,
                        Password: credentials?.password
                    })
                })

                const json = await res.json()
                const user = await json?.data
                if (user) {
                    return user;
                } else {
                    return null
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user
            }
            return token
        },

        async session({ session, token, user }) {
            if (token) {
                session.user = token
            }
            return session
        },
    },
    pages: {
        signIn: "/auth",
    },
};
