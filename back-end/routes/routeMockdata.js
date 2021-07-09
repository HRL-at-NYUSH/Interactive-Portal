const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const Entity = require('../models/Entity')

//get data all

router.get('/', async (req, res) => {
  try {
    const allData = await Entity.find()
    res.json(allData)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
//get one element
router.get('/:id', (req, res) => {})

//create one element
router.post('/', async (req, res) => {
  //create new schema - database object
  const myentity = new Entity({
    ID: req.body.ID,
    Time: req.body.Time,
    Person: req.body.Person,
    Company: req.body.Company,
    Name: req.body.Name,
    Occupation: req.body.Occupation,
    Address: req.body.Address,
    Birthplace: req.body.Birthplace,
    State: req.body.State,
    Gender: req.body.Gender,
    Age: req.body.Age,
    Immigration_year: req.body.Immigration_year,
    Latitude: req.body.Latitude,
    Longitude: req.body.Longitude,
  })
  //save the new object to the mongodb database
  myentity
    .save()
    .then((result) => {
      //res.json(result);
      res.status(201).json(result)
    })
    .catch((err) => {
      //res.json({ message: err });
      res.status(400).json({ message: err.message })
    })
})

//update one element
router.patch('/:id', (req, res) => {})

module.exports = router
