const db = require('../database/db')
const upload = require('../database/aws-manage').upload

module.exports = (app) => {
  app.post('/api/v1/image-upload', (req, res, next) => {
    const imageUpload = upload.single('image')
    imageUpload(req, res, (err) => {
      console.log(req.file)
      return res.json({imageURL: req.file.location})
    })
  })
}