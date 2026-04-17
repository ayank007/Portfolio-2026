import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createRouter, RouterProvider, createRootRoute, createRoute } from '@tanstack/react-router'
import './index.css'

import App from './App.tsx'
import Home from './pages/Home.tsx'
import NotFound from './pages/NotFound.tsx'
import ComingSoon from './pages/ComingSoon.tsx'

// 1. Root Layout
const rootRoute = createRootRoute({
  component: App,
  notFoundComponent: NotFound,
})

// 2. Home Route (Injected into App's Outlet)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
})
const freelancingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/freelancing',
  component: ComingSoon,
})
const ResumeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resume-and-portfolio',
  component: ComingSoon,
})
const WorkallyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/workally',
  component: ComingSoon,
})
const FutnoteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/futnote',
  component: ComingSoon,
})
const BankbuddyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/bankbuddy',
  component: ComingSoon,
})
const ReelBhejoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reel-bhejo',
  component: ComingSoon,
})
const TravmaksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/travmaks',
  component: ComingSoon,
})
const FunProjectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/fun-projects',
  component: ComingSoon,
})

// 3. Register Router
const routeTree = rootRoute.addChildren([indexRoute, freelancingRoute, ResumeRoute, WorkallyRoute, FutnoteRoute, BankbuddyRoute, ReelBhejoRoute, TravmaksRoute, FunProjectsRoute])
const router = createRouter({ routeTree, basepath: (import.meta.env.VITE_BASE_PATH || '/').replace(/\/$/, '') })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)