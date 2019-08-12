const express = require('express')
const router = require('./router/router')
const mongodb= require('./config/mongodb')
const app = express()

/* Database operation mount app */
app.mongodb = mongodb

app.listen('8888', () => {
  console.log('It is Serve -------------')
})