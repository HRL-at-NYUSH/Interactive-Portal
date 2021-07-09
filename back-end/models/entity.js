const mongoose = require('mongoose')

const entitySchema = new mongoose.Schema({
  ID: {
    type: Number,
    required: true,
    unique: true,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value',
    },
  },
  Time: {
    type: Number,
    required: true,
  },
  Person: { type: Boolean, required: true },
  Company: { type: Boolean, required: true },
  Name: { type: String, required: true },
  Occupation: { type: String, required: false },
  Address: { type: String, required: true },
  Birthplace: { type: String, required: true },
  State: { type: String, required: false },
  Gender: { type: String, required: false },
  Age: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value',
    },
  },
  Immigration_year: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value',
    },
  },
  Latitude: { type: Number, required: false },
  Longitude: { type: Number, required: false },
})

module.exports = mongoose.model('Entities', entitySchema)
