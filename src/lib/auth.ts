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
                // console.log(json, 'jsonInAuth')
                const user = await json?.data
                if (user) {
                    // console.log(user, 'user in Auth')
                    return user;
                } else {
                    // console.log('NO USER')
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
            // if (token) {
            //     session.user = token.user
            // }
            return session // The return type will match the one returned in `useSession()`
        },
    },
    pages: {
        signIn: "/auth",
        // signIn: "/auth",
    },
};
