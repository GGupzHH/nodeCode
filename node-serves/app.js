const express = require('express')
const router = require('./router/router')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const filter = require('./config/filter')
const app = express()


/* request mount */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use((request, response, next) => {
  console.log(request.method)
  console.log(request.url)
  console.log(request.headers)
  console.log(request.body)
  if (request.url !== `/login` && request.url !== `/logon`) {
    try {
      let tokenend = jwt.verify(
        request.headers.token,
        'GGupzhh'
      )
      filter(tokenend, request.headers.token, (ret) => {
        if (ret) {
          next()
        } else {
          response.send({
            code: 403,
            msg: 'Please login',
            date: []
          })
        }
      })
    } catch {
      response.send({
        code: 403,
        msg: 'Please login',
        date: []
      })
    }
  } else {
    next()
  }
})
/* Routing mount */
app.use(router)

app.listen('8888', () => {
  console.log('It is Serve -------------')
})