require('dotenv').config()

let MONGODB_URI = process.env.MONGODB_URI
let STAFF_PASSWORD = 'f'
let PORT = process.env.PORT
let DB_NAME = 'JoulutoiveetTestiVoiPoistaa'

if (process.env.NODE_ENV === 'production') {
  STAFF_PASSWORD = process.env.STAFF_PASSWORD
  DB_NAME = 'HopeTampereJoulutoiveet'
}

module.exports = {
  MONGODB_URI,
  STAFF_PASSWORD,
  PORT,
  DB_NAME
}