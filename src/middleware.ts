import { NextResponse, NextRequest } from "next/server";
import { auth } from "@/auth";
import {
  apiAuthPrefix,
  defaultLoginRedirect,
  AuthRoutes,
  publicRoutes,
  staticAssets,
} from "./routes";

export default auth((req, res) => {
  const { nextUrl } = req;
  const isLoggedin = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = AuthRoutes.includes(nextUrl.pathname);
  const isStaticAsset = nextUrl.pathname.startsWith(staticAssets);

  if (!!isApiAuthRoute) {
    return NextResponse.next();
  }
  if (isStaticAsset) {
    return NextResponse.next();
  }
  if (isAuthRoute) {
    if (isLoggedin) {
      return NextResponse.redirect(new URL(defaultLoginRedirect, req.url));
    } else {
      return NextResponse.next();
    }
  }

  if (!isLoggedin && !isPublicRoute) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  } else {
    return NextResponse.next();
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
