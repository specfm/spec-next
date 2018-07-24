// @flow
const next = require('next')
const routes = require('./config/routes')
const prod = process.env.NODE_ENV === 'production'
const app = next({ dev: !prod })
const handler = routes.getRequestHandler(app)

const express = require('express')
app.prepare().then(() => {
  express()
    .use(handler)
    .listen(3000)
})