import { NextResponse } from 'next/server'

export function middleware(request) {
    console.log('hello');

    // return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ['/diary/:path', '/tasks']
}