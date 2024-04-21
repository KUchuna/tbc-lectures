import { NextResponse } from "next/server";
import { AUTH_COOKIE_KEY } from "./lib/variables";
import { cookies } from "next/headers";

export function middleware(req) {
  if (!cookies().has(AUTH_COOKIE_KEY)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/services",
    "/services/(.*)",
    "/blogs",
    "/blogs/(.*)",
    "/contact",
  ],
};