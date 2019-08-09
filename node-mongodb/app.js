let MongoClint = require('mongodb').MongoClient
let url = `mongodb://127.0.0.1:27017/`
let insert = [
  {
    name: 'qbw',
    age: 12
  }, {
    name: 'cbf',
    age: 13
  }, {
    name: 'dbnf',
    age: 14
  }, {
    name: 'lbol',
    age: 13
  }, {
    name: 'qbq',
    age: 16
  }
]

// Connect Mongodb
MongoClint.connect(url, {useNewUrlParser: true}, (err, client) => {
  // database name
  let db = client.db('zyg')

  // table name
  let collection = db.collection('node-mongodb-demo')

  // insert One
  // collection.insertOne({name: 'z2s', age: 10}, (err, result) => {
  //   _cb(err, result, '插入', client)
  // })

  // insert Multiple
  // collection.insertMany(insert, (err, result) => {
  //   _cb(err, result, '插入', client)
  // })

  // query One
  // collection.findOne({age: 10}, (err, result) => {
  //   console.log(result)
  //   client.close()
  // })

  // // query Multiple  读取多条的视乎要加toArray
  // // collection.find({age: 16}).toArray((err, result) => {
  // collection.find({age: {$lt: 14}}).toArray((err, result) => {
  //   console.log(result)
  //   client.close()
  // })

  // remove 
  collection.deleteOne({name: 'lbol'}, (err, result) => {
    console.log(result)
  })

})
function _cb (err, result, tips, client) {
  if (err) {
    console.log(`${tips}失败！`)
  } else {
    console.log(`${tips}成功, ${tips + result.result.n}条数据`)
  }
  client.close()
}