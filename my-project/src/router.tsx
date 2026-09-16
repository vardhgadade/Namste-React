// src/router.tsx
import { createRouter, createMemoryHistory } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function makeRouter(url?: string) {
  return createRouter({
    routeTree,
    defaultNotFoundComponent: () => <div className="p-8">404 — Page not found</div>,
    ...(url ? { history: createMemoryHistory({ initialEntries: [url] }) } : {}),
  })
}