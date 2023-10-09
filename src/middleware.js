import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request){
    const pathname = request.nextUrl.pathname
    
    const isPublicPath = pathname === '/login' || pathname === '/register' || pathname === '/'

    const token = request.cookies.get('token')?.value || ''

    console.log(token)

    const url = request.nextUrl

    if(!token && !isPublicPath){
        url.pathname = '/login'
        return NextResponse.redirect(url)
    }
}

export const config = {
    matcher:[
        '/',
        '/login',
        '/register',
        '/dashboard',
    ],
}