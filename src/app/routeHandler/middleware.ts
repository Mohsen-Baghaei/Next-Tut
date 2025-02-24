import { NextResponse, type NextRequest } from "next/server";

//First Way
/* export async function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url));
}
export const config = {
  matcher: "/profile",
};
 */

//Second Way
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/home", request.url));
  }
}
