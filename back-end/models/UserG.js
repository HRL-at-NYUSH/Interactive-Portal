const mongoose = require('mongoose')
const autoIncrement = require('mongoose-sequence')(mongoose)
const UserSchemaG = new mongoose.Schema(
  {
    idG: { type: Number },
    google_id: { type: String },
    displayName: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    img: { type: String },
    dateSigned: { type: Date, required: false, default: Date.now },
  },
  { collection: 'usersG' },
)

UserSchemaG.plugin(autoIncrement, { inc_field: 'idG' })

const UserG = mongoose.model('userG', UserSchemaG)

module.exports = UserG
