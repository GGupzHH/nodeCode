const express = require('express')
const router = require('./router/router')
const { insertOne } = require('./config/mongodb')
const app = express()
// app.use()


console.log(insertOne)
insertOne('user', {userName: 'zs', password: '123'}, (err, results) => {
  console.log(results)
})
app.listen('8888', () => {
  console.log('It is Serve -------------')
})