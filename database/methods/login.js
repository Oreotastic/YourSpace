//third-party dependencies
const bcrypt = require('bcrypt')

//dev-made dependencies
const token = require('../../config/token')
const users = require('./users')

module.exports = {
  signUp: async(user) => {
    const saltRounds = 10

    //hash password
    const hash = await bcrypt.hash(user.password, saltRounds)
    
    if(user.facebookID) { //using Facebook protocal
    
    } else if(user.googleID) { //using Google protocal
        
    } else {
      await users.createUser(user, hash)
    }

    const createdUser = await users.getUserByUsername(user.username)
    const generatedToken = token.createToken(createdUser)
    return generatedToken
  },
  signIn: async(username, password) => {
    const User = await users.getUserByUsername(username)
    const hash = User.hash
    const match = bcrypt.compare(password, hash)
    return match
  }
}