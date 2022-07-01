// This file was automatically added by layer0 deploy.
// You should commit this file to source control.
const { Router } = require('@layer0/core/router')
const { nextRoutes } = require('@layer0/next')

module.exports = new Router()
  .get('/ssg', ({ cache, removeUpstreamResponseHeader }) => {
    cache({
      browser: false,
      edge: {
        maxAgeSeconds: 30,
        staleWhileRevalidateSeconds: 30,
      },
    })
  })

  .get('/:locale?/ssg', ({ cache, removeUpstreamResponseHeader }) => {
    cache({
      browser: false,
      edge: {
        maxAgeSeconds: 30,
        staleWhileRevalidateSeconds: 30,
      },
    })
  })

  .get('/:locale(en|de)?/ssg', ({ cache, removeUpstreamResponseHeader }) => {
    cache({
      browser: false,
      edge: {
        maxAgeSeconds: 30,
        staleWhileRevalidateSeconds: 30,
      },
    })
  })

  .get('/isr', ({ cache, removeUpstreamResponseHeader }) => {
    cache({
      browser: false,
      edge: {
        maxAgeSeconds: 30,
      },
    })
  })

  .get('/:locale?/isr', ({ cache, removeUpstreamResponseHeader }) => {
    cache({
      browser: false,
      edge: {
        maxAgeSeconds: 30,
      },
    })
  })

  .get('/:locale(en|de)?/isr', ({ cache, removeUpstreamResponseHeader }) => {
    cache({
      browser: false,
      edge: {
        maxAgeSeconds: 30,
      },
    })
  })
  .match('/service-worker.js', ({ serviceWorker }) => {
    return serviceWorker('.next/static/service-worker.js')
  })
  .use(nextRoutes) // automatically adds routes for all files under /pages
