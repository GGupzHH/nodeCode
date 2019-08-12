const md5 = require('md5')
const db= require('../config/mongodb')
module.exports.model_entry_logon = (body, cb) => {
  const { username, pwd} = body
  if (!username || !pwd) {
    cb(0, 'username and password cannot be empty', [])
  } else {
    db.findOne('user', {username: username}, (err, results) =>{
      if (err) {
        cb(0, 'Please contact the administrator', [])
      } else {
        if (results) {
          cb(0, 'The user exists', [])
        } else {
          db.insertOne('user', {
            username: username,
            pwd: md5(pwd)
          }, (insert_err, insert_results) => {
            if (insert_err) {
              cb(0, 'Please contact the administrator1', [])
            } else {
              cb(200, 'login was successful', {
                username: insert_results.ops.username
              })
            }
          })
        }
      }
  })
  }
}