const JWT = require('jsonwebtoken')

const keys = require('./keys')

module.exports = {
  createToken: async(user) => {
    const token = JWT.sign({
      iss: 'YourSpace',
      sub: user.id,
      iat: new Date().getTime(), //current date
      exp: new Date().setDate(new Date().getDate() + 1) //1 day ahead of current date
    }, keys.JWT.secret)
    return token
  }
}