import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    // const path = request.nextUrl.pathname;

    // const isPublicPath = path === "/authentication/signup" || path === "/authentication/sign-in";

    // const token = request.cookies.get("token")?.value || "";
    
    // if (isPublicPath && token) {
    //     request.cookies.set('token', token);
    //     return NextResponse.redirect(new URL("/", request.nextUrl));
    // }

    // if (!isPublicPath && !token) {
    //     return NextResponse.redirect(new URL("/authentication/sign-in", request.nextUrl));
    // }
}

export const config = {
    matcher: [
        "/step1/build-business-credit",
        "/a",
        "/step4",
        "/step7",
        "/authentication/signup",
        "/authentication/sign-in"
    ]
}