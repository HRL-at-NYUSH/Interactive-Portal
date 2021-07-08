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
  Occupation: { type: String, required: true },
  Address: { type: String, required: true },
  Birthplace: { type: String, required: true },
  State: { type: String, required: true },
  Gender: { type: String, required: true },
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
  Latitude: { type: Number, required: true },
  Longitude: { type: Number, required: true },
})

module.exports = mongoose.model('Entity', entitySchema)
