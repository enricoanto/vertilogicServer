'use strict'
const express = require('express').Router
const route = express()
const UserController = require('../controllers/usersController')

route.post ('/register', UserController.register)
route.post ('/user/:userId', UserController.addDish)
route.get ('/user/:userId', UserController.listOrder)



module.exports = route