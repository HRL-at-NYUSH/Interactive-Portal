const express = require('express')
const { model } = require('mongoose')
router = express.Router()

//get data all
router.get('/', (req, res) => {
  res.send('hi')
})

//get one element
router.get('/:id', (req, res) => {})

//create one element
router.post('/', (req, res) => {})

//update one element
router.patch('/:id', (req, res) => {})

module.exports = router
