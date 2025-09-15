// src/lib/auth.ts
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

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
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 1 hour
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // ✅ Allow going back to the login or auth-related pages
      if (url.startsWith("/auth")) {
        return url
      }
      return `${baseUrl}/dashboard`
    },
  },
}
