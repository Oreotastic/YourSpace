//Third party dependencies
const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const app = express()


//dev made dependencies
const db = require('./database/db')

app.use(bodyParser.json())
app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/src/assets', express.static(path.join(__dirname, 'assets')))

//Routes
require('./routes/user')(app) //user routes
require('./routes/upload')(app) //file routes

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'))
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