import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Define public routes that do not require authentication
const isPublicRoute = createRouteMatcher([
  '/', 
  '/api/webhooks/clerk', 
  '/api/webhooks/stripe'
]);

export default clerkMiddleware(async (auth, req) => {
  // If the request is for a public route, skip authentication
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  // For all other routes, enforce authentication
  await auth.protect();

  // Proceed with the request
  return NextResponse.next();
});

// Configuration to apply the middleware to all routes except static assets
export const config = {
  matcher: [
    "/api/(.*)",  // Apply to API routes
    "/",  // Apply to root route
  ],
};  
