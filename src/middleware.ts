import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// add the routes that we want to protect
const isProtectedRoute = createRouteMatcher(["/authentication/user-profile"]);

// we can use ether one
//const isPublicRoute = createRouteMatcher(["/", '/authentication/sign-in(.*)', '/authentication/sign-up(.*)']);

// we pass the isProtectedRoute to the fuction to check
export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
  // if (!isPublicRoute(req)) await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
