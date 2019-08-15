const models = require('../models/models_config')
module.exports.logon = (request, response, err) => {
  models.model_entry.model_entry_logon(request.body, (state, msg, data) => {
    response.send({
      code: state,
      msg: msg,
      date: data
    })
  })
}
module.exports.login = (request, response, err) => {
  models.model_entry.model_entry_login(request, (state, msg, data) => {
    response.send({
      code: state,
      msg: msg,
      date: data
    })
  })
}
module.exports.logout = (request, response, err) => {
  models.model_entry.model_entry_logout(request, (state, msg, data) => {
    response.send({
      code: state,
      msg: msg,
      data: data
    })
  })
}