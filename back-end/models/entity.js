const mongoose = require('mongoose')
<<<<<<< HEAD

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
=======
const autoIncrement = require('mongoose-sequence')(mongoose)

const EntitySchema = new mongoose.Schema(
  {
    idM: { type: Number },
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
  },
  { collection: 'latlong' },
)

EntitySchema.plugin(autoIncrement, { inc_field: 'idM' })

const Entity = mongoose.model('Entity', EntitySchema)
>>>>>>> 5317c513e800c10c3e66e88106fef0cd0f91e1e7

module.exports = Entity
