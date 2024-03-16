import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};

/* const publicRoutes = ["/"]; */

export async function middleware(req: NextRequest) {
/*   console.log(req.cookies); */
  return NextResponse.next();
}
