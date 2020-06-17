const db = require('./database/db')
const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/src/assets', express.static(path.join(__dirname, 'assets')))


//Routes
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/users', (req, res, next) => {
  db.users.getUsers()
    .then(response => res.send(response))
    .catch(next)
})

app.post('/route/signin', (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  db.login.signIn(username, password)
    .then(response => console.log(response))
})

app.post('/route/signup', (req, res, next) => {
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

app.get('*', (req, res, next) => {
  res.redirect('/')
})

const port = process.env.PORT || 3000

//initializes database
db.sync().then(()=> {
  app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
  })
})