// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   const path = req.nextUrl.pathname;

//   const isPublicPath = path === "/login";
//   const accessToken = req.cookies.get("accessToken")?.value || "";

//   // if (accessToken) {
//   //   return NextResponse.redirect(new URL("/", req.nextUrl));
//   // }

//   if (!accessToken) {
//     return NextResponse.redirect("/login");
//   }

//   // Additional logic, such as token verification, can be added here

//   return NextResponse.next();
//   // console.log("accessToken", accessToken);

//   //   if (
//   //     !isPublicPath &&
//   //     !accessToken &&
//   //     (role !== "admin" || role !== "supperAdmin")
//   //   ) {
//   //     return NextResponse.redirect(new URL("/login", req.nextUrl));
//   //   }
// }

// export const config = {
//   matcher: ["/", "/login"],
// };

import { NextRequest, NextResponse } from "next/server";
import { jwtHelpers } from "./helpers/jwtHelpers";

const AuthRoutes = ["/login", "/register"];

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

  const user = jwtHelpers.decodedJWT(accessToken!);
  console.log("middleware", user);

  // if (accessToken) {
  //   return NextResponse.redirect(new URL("/", req.nextUrl));
  // }

  // Additional logic, such as token verification, can be added here

  return NextResponse.next();
}

export const config = {
  matcher: ["/user", "/admin", "/another-protected-path"],
};
