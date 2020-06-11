//third-party dependencies
const bcrypt = require('bcrypt')

//dev-made dependencies
const token = require('../../config/token')
const users = require('./users')

module.exports = {
  signUp: async(user) => {
    const saltRounds = 10

    return await bcrypt.hash(user.password, saltRounds, async(hashErr, hash) => {
      try {
        if(user.facebookID) { //using Facebook protocal
    
        } else if(user.googleID) { //using Google protocal
          
        } else {
          const newUser = await users.createUser(user, hash)
          return await token.createToken(newUser)
        }
      } catch (err) {
        console.log('catched error:', err)
      }
    })
  },
  signIn: async(username, password) => {
    const User = await users.getUserByUsername(username)
    const hash = User.hash
    bcrypt.compare(password, hash, (err, result) => {
      console.log(result)
    })
  }
}