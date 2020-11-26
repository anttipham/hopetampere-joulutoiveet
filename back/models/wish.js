const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const wishSchema = new mongoose.Schema({
  // tunnistautuminen
  email: { type: String, required: true, unique: true },

  // kerättävät tiedot
  fullName: { type: String },
  lifeSituation: { type: String },
  
  children: [{
    name: { type: String, required: true },
    age: {
      type: Number,
      required: true,
      min: 0,
      max: 17
    },
    gender: { type: String, required: true },
    wish: { type: String, required: true }
  }],
  date: Date
})

wishSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

wishSchema.plugin(uniqueValidator)

module.exports = mongoose.model('wish', wishSchema)