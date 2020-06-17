const db = require('../database/db')
const upload = require('../database/aws-manage').upload

const imageUpload = upload.single('image')

module.exports = (app) => {
  app.post('/api/v1/image-upload', (req, res, next) => {
    imageUpload(req, res, (err) => {
      console.log(req.file)
      return res.json({imageURL: req.file.location})
    })
  })
}