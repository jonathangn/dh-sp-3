// import CredentialsProvider from "next-auth/providers/credentials";
// import type { NextApiRequest, NextApiResponse } from "next"
// // import bcrypt from 'bcryptjs'
// import NextAuth, { Awaitable, RequestInternal, User } from "next-auth"

// async function auth(req: NextApiRequest, res: NextApiResponse) {

//   // Do whatever you want here, before the request is passed down to `NextAuth`
//   // if (req.query.nextauth?.includes("callback") && req.method === "POST") {
//   //   console.log(
//   //     "Handling callback request from my Identity Provider",
//   //     req.body
//   //   )
//   // }
//   // Get a custom cookie value from the request
//   const userCookie = req.cookies["user-stage"]

//   return await NextAuth(req, res, {
//     providers: [
//       CredentialsProvider({
//         name: "Credentials",
//         credentials: {
//           username: { label: "Correo Electrónico", type: "email" },
//           password: { label: "Contraseña", type: "password" }
//         },
//         authorize: function (credentials: Record<string, string> | undefined, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">): Awaitable<User | null> {
//           // const res = await fetch("/api/auth", {
//           //   method: 'POST',
//           //   body: JSON.stringify(credentials),
//           //   headers: { "Content-Type": "application/json" }
//           // })
//           // const user = await res.json()
//           // if (res.ok && user) {
//           //   return user
//           // }
//           const user = { id: "1", username: "jonathangn@mail.com", password: "jonathangn@mail.com" }
//           const userMatch = (credentials?.username === user.username)
//           if (!userMatch) throw new Error('Usuario no encontrado')
//           // const passMatch = await bcrypt.compare(credentials?.pass, user.pass)
//           const passMatch = (credentials?.password === user.password)
//           if (!passMatch) throw new Error('Usuario_no_encontrado')
//           return user
//         }
//       })
//     ],
//     callbacks: {
//       jwt({ user, token, account, profile, session }) {
//         if (user) token.user = user;
//         return token
//       },
//       session({ session, token }) {
//         // Return a cookie value as part of the session
//         // This is read when `req.query.nextauth.includes("session") && req.method === "GET"`
//         session.user = token?.user
//         return session
//       }
//     }
//   })
// }

// export { auth as GET, auth as POST }



import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
