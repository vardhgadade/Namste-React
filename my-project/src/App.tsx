// src/App.tsx
import './App.css'
import { RouterProvider } from '@tanstack/react-router'
import { makeRouter } from './router'

const router = makeRouter()

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {
  return <RouterProvider router={router} />
}