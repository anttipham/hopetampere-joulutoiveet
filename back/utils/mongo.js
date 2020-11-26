const mongoose = require('mongoose')
const config = require('./config')

// Yhdistetään MongoDB:hen
const connection = mongoose.connect(config.MONGODB_URI, {
  dbName: config.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
    console.log('Connected to MongoDB:', config.DB_NAME)
  })
  .catch((error) => {
    console.error('Failed connecting to MongoDB:', error.message)
  })

module.exports = connection