const passport = require('passport')
const JwtStrategy = require('passport-jwt')
const { ExtractJwt } = require('passport-jwt')

const keys = require('./keys')

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: keys.JWT_Secret.secret
}, async (payload, done) => {
  try {
    //Find the user specified in token

    //if user doesnt exist, handle it

    //otherwise return the user
  } catch(err) {
    done(error, false)
  }
}))