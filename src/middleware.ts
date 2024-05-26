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

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isPublicPath = path === "/login";
  const accessToken = req.cookies.get("accessToken")?.value || "";

  if (!isPublicPath && !accessToken) {
    return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
  }

  // if (accessToken) {
  //   return NextResponse.redirect(new URL("/", req.nextUrl));
  // }

  // Additional logic, such as token verification, can be added here

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/protected-path", "/another-protected-path"],
};
