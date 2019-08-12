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
      cb(db)
    }
  })
}

/*
* collection 要插入的集合
* obj 插入的数据
* 操作数据库的回调
*/
/* --------------- insert One --------------- */
module.exports.insertOne = (collection, obj, cb) => {
  _connect((db) => {
    db.collection(collection).insertOne(obj, (err, results) => cb(err, results))
  })
}
/* --------------- insert Multiple --------------- */
module.exports.insertMany = (collection, arr, cb) => {
  _connect((db) => {
    db.collection(collection).insertMany(arr, (err, results) => cb(err, results))
  })
}


/*
* collection 要插入的集合
* id 查找的数据
* 操作数据库的回调
*/
/* --------------- query id --------------- */
module.exports.findOneById = (collection, id, cb) => {
  _connect((db) => {
    db.collection(collection).findOne({ _id: mongodb.ObjectId(id) }, (err, results) => cb(err, results))
  })
}
/* --------------- query one --------------- */
module.exports.findOne = (collection, obj, cb) => {
  _connect((db) => {
    db.collection(collection).findOne(obj, (err, results) => cb(err, results))
  })
}
/* --------------- query Multiple --------------- */
module.exports.findMultiple  = (collection, obj, cb) => {
  _connect((db) => {
    console.log(obj)
    db.collection(collection).find(obj).toArray((err, results) => cb(err, results))
    // let res = db.collection(collection).find(obj).pretty()
    // console.log(res)
  })
}


/* --------------- modify one id --------------- */
module.exports.updateOneById = (collection, id, upobj, cb) => {
  _connect((db) => {
    db.collection(collection).updateOne({ _id: mongodb.ObjectId(id) }, {$set: upobj}, (err, results) => cb(err, results))
  })
}
/* --------------- modify one --------------- */
module.exports.updateOne = (collection, whereobj, upobj, cb) => {
  _connect((db) => {
    db.collection(collection).updateOne(whereobj, {$set: upobj}, (err, results) => cb(err, results))
  })
}
/* --------------- modify Multiple --------------- */
module.exports.updateMultiple = (collection, whereobj, upobj, cb) => {
  _connect((db) => {
    db.collection(collection).updateMany(whereobj, {$set: upobj}, (err, results) => cb(err, results))
  })
}


/* --------------- delete one id --------------- */
module.exports.deleteOneById = (collection, id, cb) => {
  _connect((db) => {
    db.collection(collection).deleteOne({ _id: mongodb.ObjectId(id) }, (err, results) => cb(err, results))
  })
}
/* --------------- delete one --------------- */
module.exports.deleteOne = (collection, whereobj, cb) => {
  _connect((db) => {
    db.collection(collection).deleteOne(whereobj, (err, results) => cb(err, results))
  })
}
/* --------------- delete Multiple --------------- */
module.exports.deleteMultiple = (collection, whereobj, cb) => {
  _connect((db) =>{
    db.collection(collection).deleteMany(whereobj, (err, results) => cb(err, results))
  })
}