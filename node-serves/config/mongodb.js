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

/*
* collection 要插入的集合
* obj 插入的数据
* 操作数据库的回调
*/
/* --------------- insert One --------------- */
module.exports.insertOne = function (collection, obj, cb) {
  _connect((db, client) => {
    db.collection(collection).insertOne(obj, (err, results) => cb(err, results))
    client.close()
  })
}
/* --------------- insert Multiple --------------- */
module.exports.insertMany = function (collection, arr, cb) {
  _connect((db, client) => {
    db.collection(collection).insertMany(arr, (err, results) => cb(err, results))
    client.close()
  })
}


/*
* collection 要插入的集合
* id 查找的数据
* 操作数据库的回调
*/
/* --------------- query id --------------- */
module.exports.findOneById = function (collection, id, cb) {
  _connect((db, client) => {
    db.collection(collection).findOne({ _id: mongodb.ObjectId(id) }, (err, results) => cb(err, results))
    client.close()
  })
}
/* --------------- query one --------------- */
module.exports.findOne = function (collection, obj, cb) {
  _connect((db, client) => {
    db.collection(collection).findOne(obj, (err, results) => cb(err, results))
    client.close()
  })
}
/* --------------- query Multiple --------------- */
module.exports.findMultiple  = (collection, obj, cb) => {
  _connect((db, client) => {
    console.log(obj)
    db.collection(collection).find(obj).toArray((err, results) => cb(err, results))
    // let res = db.collection(collection).find(obj).pretty()
    // console.log(res)
    client.close()
  })
}


/* --------------- modify one id --------------- */
module.exports.updateOneById = function (collection, id, upobj, cb) {
  _connect((db, client) => {
    db.collection(collection).updateOne({ _id: mongodb.ObjectId(id) }, {$set: upobj}, (err, results) => cb(err, results))
    client.close()
  })
}

