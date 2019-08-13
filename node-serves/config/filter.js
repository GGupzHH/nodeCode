const db = require('./mongodb')
module.exports = (tokenend, token, cb) => {
  db.findOne('user', {username: tokenend.name}, (err, results) => {
    console.log(results.token)
    console.log(token)
    if (token === results.token) {
      cb(true)
    } else {
      cb(false)
    }
  })
}
