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

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoienNzIiwiaWF0IjoxNTY1NjYzMjY4LCJleHAiOjE1NjU2NjY4Njh9.EGztivvNxY1C5AKzLoa3CVTsVFAfJmDb2RS4u_AElZg