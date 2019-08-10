const express = require('express')
const router = require('./router/router')
const { insertOne, insertMany, findOneById, findOne, findMultiple,updateOneById } = require('./config/mongodb')
const app = express()
// app.use()


// console.log(insertOne)
// insertOne('user', {userName: 'zs', password: '123'}, (err, results) => {
//   console.log(results)
// })
// insertMany('user', [{name: 'zss', passworde: '321'}, {name: 'zss', passworde: '321'}], (err, results) => {
//   console.log(results)
// })
// findOneById('user', '5d4e8079ece99d193ca2101b', (err, results) => {
//   console.log(results)
// })
// findOne('user', {userName: 'zs'}, (err, results) => {
//   console.log(results)
// })
// updateOneById('user', '5d4e8079ece99d193ca2101b', {name: '11111111111'}, (err, results) => {
//   console.log(results)
// })
// findMultiple('user', {userName: 'zs'}, (err, result) => {
//   console.log(result)
// })
app.listen('8888', () => {
  console.log('It is Serve -------------')
})