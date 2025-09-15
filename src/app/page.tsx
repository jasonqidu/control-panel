import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/dashboard") // logged in → dashboard
  } else {
    redirect("/auth/login") // not logged in → login
  }
}
