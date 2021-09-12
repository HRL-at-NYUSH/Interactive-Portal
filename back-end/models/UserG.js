const mongoose = require('mongoose')
const autoIncrement = require('mongoose-sequence')(mongoose)
const UserSchemaG = new mongoose.Schema(
  {
    idG: { type: Number },
    google_id: { type: String, required: true },
    displayName: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    img: { type: String },
    dateSigned: { type: Date, required: false, default: Date.now },
    savedchart: [{
      chartid: {type: mongoose.ObjectIds},
      title: {type: String},
      charttype: {type: String, required: false},
      data: [{
        dataset: {type: String, required: false},
        xvar: {type: String},
        yvar: {type: String},
      }],
      options: {type: mongoose.Mixed}
    }],
    session: [{
      tabs: [{
        category: {type: String, required: false},
        charts: [{
          chartid: {type: mongoose.ObjectIds},
          title: {type: String},
          charttype: {type: String, required: false},
          data: [{
            dataset: {type: String, required: false},
            xvar: {type: String},
            yvar: {type: String},
          }],
          options: {type: mongoose.Mixed}
        }]
      }]
    }]
  },
  { collection: 'usersG' },
)

UserSchemaG.plugin(autoIncrement, { inc_field: 'idG' })

const UserG = mongoose.model('userG', UserSchemaG)

module.exports = UserG
