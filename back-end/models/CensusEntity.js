const mongoose = require('mongoose')
const autoIncrement = require('mongoose-sequence')(mongoose)

const EntitySchema = new mongoose.Schema(
  {
    'idM': { type: Number },
    'Year': { type: Number},
    'Sex': { type: String},
    'Race': { type: String},
    'Relationship with Head of Household': { type: String},
    'Marital Status': { type: String},
    'Family Size': { type: Number},
    'Birthplace': { type: String},
    'Mother Birthplace': { type: String},
    'Father Birthplace': { type: String},
    'Navitity': { type: String},
    'Citizenship Status': { type: String},
    'Immigration Year': { type: Number},
    'Literacy': { type: String},
    'Education Level': { type: Number},
    'Occupation': { type: String},
    'Occupation Income': { type: Number},
    'Occupation Prestige': { type: Number},
    'Industry': { type: String},
    'Employ Status': { type: String},
    'Income Wage': { type: Number},
    'Occupation Category': { type: String},
    'Industry Category': { type: String},
  },
  { collection: 'us-census' },
)

EntitySchema.plugin(autoIncrement, { inc_field: 'idM' })

const Entity = mongoose.model('Entity', EntitySchema)

module.exports = Entity
