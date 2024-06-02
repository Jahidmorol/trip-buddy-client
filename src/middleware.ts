import { NextRequest, NextResponse } from "next/server";

import { jwtHelpers } from "./helpers/jwtHelpers";

const AuthRoutes = ["/login", "/register"];

const UserRoutes = [
  "/user",
  "/user/my-all-trip",
  "/user/change-password",
  "/user/request",
];

const AdminRoutes = [
  "/admin",
  "/admin/user-management",
  "/admin/change-password",
  "/admin/trip-management",
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const accessToken = req.cookies.get("accessToken")?.value || "";

  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  try {
    const user = jwtHelpers.decodedJWT(accessToken);

    if (UserRoutes.includes(pathname) && user.role !== "USER") {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (AdminRoutes.includes(pathname) && user.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: [
    "/user",
    "/user/my-all-trip",
    "/user/change-password",
    "/user/request",
    "/admin",
    "/admin/user-management",
    "/admin/change-password",
    "/admin/trip-management",
  ],
};
