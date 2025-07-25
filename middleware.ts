import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/',                   
  '/seleccionar-org',
  '/iniciar-sesion',     // Asumimos que esta es pública
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, orgId } = await auth();
  const currentPath = req.nextUrl.pathname;

  // 1. Usuario NO autenticado, en ruta NO pública → redirigir a login
  if (!userId && !isPublicRoute(req)) {
    return NextResponse.redirect(new URL('/iniciar-sesion', req.url));
  }

  // 2. Usuario autenticado SIN organización y NO está en seleccionar-org → redirigir
  if (userId && !orgId && currentPath !== '/seleccionar-org') {
    return NextResponse.redirect(new URL('/seleccionar-org', req.url));
  }

  // 3. Usuario autenticado CON organización y está en ruta pública → redirigir a organización
  if (userId && orgId && isPublicRoute(req) && currentPath !== `/organizacion/${orgId}`) {
    const orgSeleccion = new URL(`/organizacion/${orgId}`, req.url);
    return NextResponse.redirect(orgSeleccion);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
