const db = require('../database/db')

module.exports = (app) => {
  app.get('/api/users', (req, res, next) => {
    db.users.getUsers()
      .then(response => res.send(response))
      .catch(next)
  })

  app.post('/route/v1/signin', (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  db.login.signIn(username, password)
    .then(response => console.log(response))
  })

  app.post('/route/v1/signup', (req, res, next) => {
    const user = {
      username: req.body.username,
      facebookID: req.body.facebookID,
      googleID: req.body.googleID,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password
    }
    db.login.signUp(user)
      .then(response => res.send(response))
      .catch(next)
  })
}