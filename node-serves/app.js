const express = require('express')
const router = require('./router/router')
const bodyParser = require('body-parser')
const app = express()


/* request mount */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use((request, response, next) => {
  console.log(request.method)
  console.log(request.url)
  console.log(request.headers)
  console.log(request.body)
  next()
})
/* Routing mount */
app.use(router)

app.listen('8888', () => {
  console.log('It is Serve -------------')
})