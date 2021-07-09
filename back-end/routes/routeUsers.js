const express = require('express')
const mongoose = require('mongoose') //library for connecting to mongodb
const router = require('express').Router()
const User = require('../models/User')
require('dotenv').config({ silent: true }) //dotenv setup for authenticatio

router.use(express.urlencoded({ extended: true }))
router.use(express.json())

//return all data
router.get('/', async (req, res) => {
  try {
    const allUsers = await User.find()
    res.json(allUsers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
//get user based on id
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id })
    res.json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
//get user by variable type and value
//get request should have a format such as get('routeUsers/user/type=email&value=aa5456@nyu.edu)
router.get('/user/', async (req, res) => {
  try {
    if (req.query.type == 'email') {
      user = await User.find({ email: req.query.value })
    }
    if (req.query.type == 'username') {
      user = await User.findOne({ username: req.query.value })
    }
    if (req.query.type == 'netid') {
      user = await User.findOne({ netid: req.query.value })
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id })
    res.json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//create one element
router.post('/', async (req, res) => {
  //create new schema - database object
  const myUser = new User({
    netid: req.body.netid,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
  //save the new object to the mongodb database
  await myUser
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

router.patch('/:id', async (req, res) => {
  const finalUser = await User.findOne({ id: req.params.id })
  let patchUser = finalUser
  if (!patchUser) {
    return res.status(400).json('Error! No user with that id exists.')
  }
  if (req.body.netid) {
    const netidExist = await User.findOne({
      netid: req.body.netid,
    })
    if (netidExist && !(req.body.netid === finalUser.netid)) {
      return res.status(400).json('Error! Username already in use.')
    }
    patchUser = await User.updateOne(
      { id: req.params.id },
      { netid: req.body.netid },
    )
    return res.status(201).json(patchUser)
  }
  if (req.body.email) {
    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist && !(req.body.email === finalUser.email)) {
      return res.status(400).json('Error! Email already in use.')
    }
    patchUser = await User.updateOne(
      { id: req.params.id },
      { email: req.body.email },
    )
    return res.status(201).json(patchUser)
  }
  if (req.body.username) {
    const usernameExist = await User.findOne({
      username: req.body.username,
    })
    if (usernameExist && !(req.body.username === finalUser.username)) {
      return res.status(400).json('Error! Username already in use.')
    }
    patchUser = await User.updateOne(
      { id: req.params.id },
      { username: req.body.username },
    )
    return res.status(201).json(patchUser)
  }
  if (req.body.password) {
    const salt = await bcryptjs.genSalt(10)
    const hash = await bcryptjs.hash(req.body.password, salt)
    patchUser = await User.updateOne({ id: req.params.id }, { password: hash })
    return res.status(201).json(patchUser)
  }
})

//update user info based on id

//delete user based on id
router.delete('/:id', async (req, res) => {
  user = await User.findOne({ id: req.params.id })
  res.user = user
  try {
    await res.user.remove()
    res.json({ message: 'Deleted user' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
