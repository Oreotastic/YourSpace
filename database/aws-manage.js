//Third party dependencies
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

//Dev made dependencies
const IAM = require('../config/keys').IAM 

const s3 = new aws.S3({
  secretAccessKey: IAM.secret,
  accessKeyId: IAM.user,
  region: 'us-east-1'
})

module.exports = {
  upload: multer({
    storage: multerS3({
      s3: s3,
      bucket: 'yourspaceoreo-bucket',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: 'TEST_META_DATA'});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  })
}