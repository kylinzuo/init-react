import { join } from 'path'
import { readFile } from 'fs'
const express = require('express')
// const routeFallback = require('connect-history-api-fallback')
const compression = require('compression')
const logger = require('morgan')
const config = require('../config').build

import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import App from './containers/app'

import todoApp from './redux/reducers'

process.env.NODE_ENV = 'production'

const staticFiles = [
  '/static/*',
  '/logo.svg',
  '/asset-manifest.json',
  '/favicon.ico'
]

const app = express()

// 日志
app.use(logger('dev'))

// 开启压缩
app.use(compression())

// 页面路由fallback
// app.use(routeFallback())

// 静态资源
const oneYear = 60 * 1000 * 60 * 24 * 365
app.use(config.assetsPublicStatic, express.static(config.assetsRootStatic, {
  maxAge: oneYear
}))

staticFiles.forEach((file) => {
  app.get(file, (req, res) => {
    const filePath = join(__dirname, '../dist', req.url)
    res.sendFile(filePath)
  })
})

// 拦截根路由下 html 文件请求，取消缓存
app.get('*', (req, res) => {
  const error = () => res.status(404).send('404')
  const htmlFilePath = join(__dirname, '../dist', 'index.html')
  readFile(htmlFilePath, 'utf-8', (err, htmlData) => {
    if (err) {
      error()
    } else {
      const context = {}
      const preloadedState = {}
      const store = createStore(todoApp, preloadedState)
      const ReactApp = renderToString(
        <App
          server
          store={store}
          location={req.url}
          context={context}
        />
      )
      const RenderedApp = htmlData.replace(`<div id="app" style="height: 100%"></div>`, `<div id="app" style="height: 100%">{{SSR}}</div>`).replace('{{SSR}}', ReactApp)
      res.status(200).send(RenderedApp)
    }
  })
})

// 启动服务
app.listen(config.port, (err) => {
  if (err) {
    return console.error(err)
  }

  console.log(`服务启动，地址：http://localhost:${config.port}`)
})
