const express = require('express')
const app = express()

// get
app.get('/', (req, res) => {
  console.log(req)
  res.send('Hello World')
})

// post
app.post('/post', (req, res) => {
  console.log(req)
  let arr = [1, 2, 3]
  res.send(arr)
})

// put
app.put('/put', (req, res) => {
  // console.log(req)
  res.send('put')
})

app.delete('/delete', (req, res) => {
  res.send({
    name: 'zs',
    age: 12
  })
})

app.patch('/patch', (req, res) => {
  res.send({
    name: 'patch',
    age: 13
  })
})

app.options('/options', (req, res) => {
  res.send()
})
app.listen('9999', () => console.log('listen 9999, is project 127.0.0.1:9999'))