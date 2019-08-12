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