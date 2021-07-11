const express = require('express')
const mongoose = require('mongoose') //library for connecting to mongodb
const router = require('express').Router()
const Entity = require('../models/Entity')
require('dotenv').config({ silent: true }) //dotenv setup for authenticatio

router.use(express.urlencoded({ extended: true }))
router.use(express.json())

//get all entities
router.get('/', async (req, res) => {
  try {
    const allData = await Entity.find()
    res.json(allData)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//get entity based on ID
router.get('/:ID', getEntity, async (req, res) => {
  res.json(201).json(res.entity)
})

//delete entity based on ID
router.delete('/:ID', async (req, res) => {
  entity = await Entity.findOne({ ID: req.params.ID })
  res.entity = entity
  try {
    await res.entity.remove()
    res.json({ message: 'Deleted entity' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//update an entity based on ID
//redo patch route
router.patch('/:ID', async (req, res) => {
  entity = await Entity.findOne({ ID: req.params.ID })
  res.entity = entity
  if (req.body.Name != null) {
    res.entity.Name = req.body.Name
  }
  if (req.body.Time != null) {
    res.entity.Time = req.body.Time
  }
  if (req.body.Person != null) {
    res.entity.Person = req.body.Person
  }
  if (req.body.Company != null) {
    res.entity.Company = req.body.Company
  }
  if (req.body.Occupation != null) {
    res.entity.Occupation = req.body.Occupation
  }
  if (req.body.Address != null) {
    res.entity.Address = req.body.Address
  }
  if (req.body.Birthplace != null) {
    res.entity.Birthplace = req.body.Birthplace
  }
  if (req.body.State != null) {
    res.entity.State = req.body.State
  }
  if (req.body.Gender != null) {
    res.entity.Gender = req.body.Gender
  }
  if (req.body.Age != null) {
    res.entity.Age = req.body.Age
  }
  if (req.body.Immigration_year != null) {
    res.entity.Immigration_year = req.body.Immigration_year
  }
  if (req.body.Latitude != null) {
    res.entity.Latitude = req.body.Latitude
  }
  if (req.body.Longitude != null) {
    res.entity.Longitude = req.body.Longitude
  }
  try {
    const updatedEntity = await res.entity.save()
    res.json(updatedEntity)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

//middleware to get entity based on ID
async function getEntity(req, res, next) {
  let entity
  try {
    entity = await Entity.findOne({ ID: req.params.ID })
    if (entity == null) {
      return res.status(404).json({ message: 'Cannot find entity' })
    } else {
      return res.status(201).json(entity)
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.entity = entity
  next()
}

//get entities by variable type and value
//get request should have a format such as get('routeMockData/entities?type=Occupation&value=Clerk)

router.get('/person/:boolean', async (req, res) => {
  try {
    entities = await Entity.find({ Person: req.params.boolean })
    if (entities == null) {
      return res.status(404).json({ message: 'Cannot find entity' })
    } else {
      return res.status(500).json(entities)
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
})
router.get('/time/:boolean', async (req, res) => {
  try {
    entities = await Entity.find({ Time: req.params.boolean })
    if (entities == null) {
      return res.status(404).json({ message: 'Cannot find entity' })
    } else {
      return res.status(500).json(entities)
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
})
router.get('/occupation/:boolean', async (req, res) => {
  try {
    entities = await Entity.find({ Occupation: req.params.boolean })
    if (entities == null) {
      return res.status(404).json({ message: 'Cannot find entity' })
    } else {
      return res.status(500).json(entities)
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
})

router.get('/name/:value', async (req, res) => {
  try {
    entities = await Entity.find({ Name: req.params.value })
    if (entities == null) {
      return res.status(404).json({ message: 'Cannot find entity' })
    } else {
      return res.status(500).json(entities)
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
})

router.get('/address/:value', async (req, res) => {
  try {
    entities = await Entity.find({ Address: req.params.value })
    if (entities == null) {
      return res.status(404).json({ message: 'Cannot find entity' })
    } else {
      return res.status(500).json(entities)
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
})

router.get('/birthplace/:value', async (req, res) => {
  try {
    entities = await Entity.find({ Person: req.params.value })
    if (entities == null) {
      return res.status(404).json({ message: 'Cannot find entity' })
    } else {
      return res.status(500).json(entities)
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
})

router.get('/state/:value', async (req, res) => {
  try {
    entities = await Entity.find({ State: req.params.value })
    if (entities == null) {
      return res.status(404).json({ message: 'Cannot find entity' })
    } else {
      return res.status(500).json(entities)
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
})

router.get('/gender/:value', async (req, res) => {
  try {
    entities = await Entity.find({ Gender: req.params.value })
    if (entities == null) {
      return res.status(404).json({ message: 'Cannot find entity' })
    } else {
      return res.status(500).json(entities)
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
})

router.get('/age/:value', async (req, res) => {
  try {
    entities = await Entity.find({ Age: req.params.value })
    if (entities == null) {
      return res.status(404).json({ message: 'Cannot find entity' })
    } else {
      return res.status(500).json(entities)
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
})

router.get('/imm_year/:value', async (req, res) => {
  try {
    entities = await Entity.find({ Immigration_year: req.params.value })
    if (entities == null) {
      return res.status(404).json({ message: 'Cannot find entity' })
    } else {
      return res.status(500).json(entities)
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
})
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
  await myentity
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

module.exports = router
