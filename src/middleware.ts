export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    /*
     * Proteger todas las rutas salvo:
     * - /auth/login
     * - /api/auth (necesario para que NextAuth funcione)
     * - /_next (archivos estáticos del framework)
     * - /favicon.ico y demás assets públicos
     */
    "/((?!auth/login|api/auth|_next|favicon.ico).*)",
  ],
}
