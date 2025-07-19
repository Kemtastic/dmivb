import { NextRequest, NextResponse } from 'next/server'
import { getSessionCookie } from 'better-auth/cookies'
import { Routes } from '@/lib/routes'

export async function middleware(request: NextRequest) {
  const cookies = getSessionCookie(request)
  const { pathname } = request.nextUrl
  
  const authPages = [Routes.Pages.SignIn, Routes.Pages.SignUp, Routes.Pages.ResetPassword]
  if (authPages.includes(pathname)) {
    if (cookies) {
      return NextResponse.redirect(new URL("/", request.url))
    }
    return NextResponse.next()
  }
  
  if (pathname.startsWith('/app')) {
    if (!cookies) {
      return NextResponse.redirect(new URL(Routes.Pages.SignIn, request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
