const express = require('express')
const controllesConfig = require('../controlles/controlles_config')
const router = express.Router()

router
  .post(`/logon`, controllesConfig.entry.logon)
  .post(`/login`, controllesConfig.entry.login)
<<<<<<< HEAD
  .post(`/logout`, controllesConfig.entry.logout)
=======
  .get(`peojectLst`)
>>>>>>> 7ad75a9121575efbcc826451d0735e74377c040f

module.exports = router