import test from "node:test"
import assert from "node:assert/strict"

import { authOptions } from "../src/lib/auth"

function getRedirectCallback() {
  const redirect = authOptions.callbacks?.redirect

  if (!redirect) {
    throw new Error("authOptions.callbacks.redirect is not defined")
  }

  return redirect
}

test("redirect callback returns auth routes unchanged", async () => {
  const redirect = getRedirectCallback()

  const result = await redirect({
    url: "/auth/reset",
    baseUrl: "http://localhost:3000",
  })

  assert.equal(result, "/auth/reset")
})

test("redirect callback sends non-auth routes to the dashboard", async () => {
  const redirect = getRedirectCallback()

  const result = await redirect({
    url: "/reports",
    baseUrl: "http://localhost:3000",
  })

  assert.equal(result, "http://localhost:3000/dashboard")
})
