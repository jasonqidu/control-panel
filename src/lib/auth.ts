import CredentialsProvider from "next-auth/providers/credentials"
import type { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.email === process.env.AUTH_EMAIL &&
          credentials?.password === process.env.AUTH_PASSWORD
        ) {
          return { id: "1", name: "Admin", email: credentials!.email }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Fuerza que después de login/logout vaya siempre al dashboard
      return `${baseUrl}/dashboard`
    },
  },
}
