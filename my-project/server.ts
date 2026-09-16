import express from 'express'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { createServer as createViteServer } from 'vite'

const app = express()

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'custom',
})

app.use(vite.middlewares)

app.use(async (req, res, next) => {
  try {

    if (!req.headers.accept?.includes('text/html')) return next()
    const url = req.originalUrl

    const template = await vite.transformIndexHtml(
      url,
      await readFile(path.resolve('index.html'), 'utf-8')
    )

    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
    const appHtml = await render(url)

    res
      .status(200)
      .set({ 'Content-Type': 'text/html' })
      .end(template.replace('<!--ssr-outlet-->', appHtml))
  } catch (e) {
    vite.ssrFixStacktrace(e as Error)
    next(e)
  }
})

app.listen(3000, () => {
  console.log('SSR server running at http://localhost:3000')
})