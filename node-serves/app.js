const express = require('express')
const router = require('./router/router')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const filter = require('./config/filter')
const app = express()


// 设置允许跨域请求
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
  res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
  res.header('X-Powered-By', 'nodejs'); //自定义头信息，表示服务端用nodejs
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

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