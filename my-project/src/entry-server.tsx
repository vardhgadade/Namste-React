// src/entry-server.tsx
import { renderToString } from 'react-dom/server'
import { RouterProvider } from '@tanstack/react-router'
import { makeRouter } from './router'

export async function render(url: string) {
  const router = makeRouter(url)
  await router.load()
  return renderToString(<RouterProvider router={router} />)
}