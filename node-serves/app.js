const express = require('express')
const router = require('./router/router')

const app = express()
// app.use()

app.listen('8888', () => {
  console.log('It is Serve -------------')
})