export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    // protect all dashboard routes
    "/dashboard/:path*",
    // but NOT /auth/*
  ],
}
