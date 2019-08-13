const md5 = require('md5')
const jwt = require('jsonwebtoken')
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
module.exports.model_entry_login = (request, cb) => {
  const { username, pwd} = request.body
  if (!username || !pwd) {
    cb(0, 'username and password cannot be empty', [])
  } else {
    db.findOne('user', {username: username}, (err, results) => {
      if (err) {
        cb(0, 'Please contact the administrator', [])
      } else {
        if (results) {
          if (md5(pwd) === results.pwd) {
            const token = jwt.sign({
                name: username //需要放到token的参数
              },
              'GGupzhh', //随便一点内容，加密的密文，私钥对应着公钥 自己加点料
              {
                expiresIn: 60 * 10 //1分钟到期时间
              }
            )
            db.updateOne('user', {username: username}, {token: token}, (err, results) => {
              console.log(results)
            })
            cb(200, 'Successful login', {
              id: results._id,
              username: results.username,
              token: token
            })
          } else {
            cb(0, 'ERROR Incorrect username or password', [])
          }
        } else {
          cb(0, 'ERROR Incorrect username or password', [])
        }
      }
    })
  }
}
