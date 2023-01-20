import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  if (request.nextUrl.pathname === "/posts/category/") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/posts";
    return NextResponse.redirect(redirectUrl);
  }
  if (request.nextUrl.pathname === "/test") {
    return NextResponse.redirect(new URL("/404", request.url));
  }
  if (request.nextUrl.pathname === "/another") {
    return NextResponse.rewrite(new URL("/rewrite", request.url));
  }
  return res;
}
