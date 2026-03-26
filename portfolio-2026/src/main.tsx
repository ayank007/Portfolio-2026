import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createRouter, RouterProvider, createRootRoute, createRoute } from '@tanstack/react-router'
import './index.css'

import App from './App.tsx'
import Home from './pages/Home.tsx'
import Test from './pages/Test.tsx'
import NotFound from './pages/NotFound.tsx'

// 1. Root Layout
const rootRoute = createRootRoute({
  component: App,
  notFoundComponent: NotFound,
})

// 2. Home Route (Injected into App's Outlet)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})
const testRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/test',
  component: Test,
})

// 3. Register Router
const routeTree = rootRoute.addChildren([indexRoute, testRoute])
const router = createRouter({ routeTree })

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