const express = require('express')
const path = require('path')
const db = require('./database/db')

const app = express()

app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/src/assets', express.static(path.join(__dirname, 'assets')))

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/users', (req, res, next) => {
  db.users.getUsers()
    .then(response => res.send(response))
    .catch(next)
})

const port = process.env.PORT || 3000

db.sync().then(()=> {
  app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
  })
})