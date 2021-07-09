const mongoose = require('mongoose')

const EntitySchema = new mongoose.Schema({
  ID: {
    type: Number,
    required: true,
    unique: true,
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
  },
  Immigration_year: {
    type: Number,
    required: true,
  },
  Latitude: { type: Number, required: false },
  Longitude: { type: Number, required: false },
})

const Entity = mongoose.model('entity', EntitySchema)

module.exports = Entity
