const express = require('express')
const controllesConfig = require('../controlles/controlles_config')
const router = express.Router()

router
  .post(`/logon`, controllesConfig.entry.logon)
  .post(`/login`, controllesConfig.entry.login)

module.exports = router