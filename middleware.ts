import {NextResponse, type NextRequest} from "next/server";

import {defaultLocale, isValidLocale} from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const {pathname, search} = request.nextUrl;
  const segments = pathname.split("/");
  const maybeLocale = segments[1];

  if (!isValidLocale(maybeLocale)) {
    const url = request.nextUrl.clone();
    const normalizedPath = pathname === "/" ? "" : pathname;
    url.pathname = `/${defaultLocale}${normalizedPath}`;
    url.search = search;
    return NextResponse.redirect(url);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", maybeLocale);

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"]
};
