const mongoClient = require('mongodb').MongoClient
const url = `mongodb://127.0.0.1:27017/`

function _connect (cb) {
  mongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.log(`There's something wrong with the database.`)
    } else {
      // Set up database name
      const db = client.db('zyg')
      cb(db)
    }
  })
}