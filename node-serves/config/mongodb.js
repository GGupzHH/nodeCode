const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const url = `mongodb://127.0.0.1:27017/`

function _connect (cb) {
  mongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.log(`There's something wrong with the database.`)
    } else {
      // Set up database name
      const db = client.db('nodeServes')
      cb(db, client)
    }
  })
}

/* --------------- insert One --------------- */
/*
  * collection 要插入的集合
  * obj 插入的数据
  * 操作数据库的回调
*/
module.exports.insertOne = function (collection, obj, cb) {
  _connect((db, client) => {
    db.collection(collection).insertOne(obj, (err, results) => cb(err, results) )
    client.close()
  })
}
/* --------------- insert Multiple --------------- */
module.exports.insertMany = function (collection, arr, cb) {
  _connect((db, client) => {
    db.collection(collection).insertMany(arr, (err, results) => cb(err, results) )
    client.close()
  })
}


/* --------------- query id --------------- */
/*
  * collection 要插入的集合
  * id 查找的数据
  * 操作数据库的回调
*/
module.exports.findOneById = function (collection, id, cb) {
  _connect((db, client) => {
    db.collection(collection).findOne({ _id: mongodb.ObjectId(id) }, (err, results) => cb(err, results) )
    client.close()
  })
}
