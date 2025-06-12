import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
  return createMiddleware({
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  })(request)
}

export const config = {
  matcher: ['/', '/(ja|en)/:path*']
}
