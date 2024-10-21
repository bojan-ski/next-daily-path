import { NextResponse } from 'next/server'
// firebase func
import { auth } from './app/firebase.config';
// toast
import toast from 'react-hot-toast';

export function middleware(request) {
    if (['/tasks', '/diary'].includes(request.nextUrl.pathname)) {

        console.log("Hello from Middleware");
    }

    // if (['/tasks', '/diary'].includes(request.nextUrl.pathname) && auth.currentUser == null) {
    // toast.error('You need to have an account in order to access the Diary');
    //     return NextResponse.redirect(new URL('/', request.url));
    // }
}

export const config = {
    matcher: ['/diary/:path', '/tasks']
}