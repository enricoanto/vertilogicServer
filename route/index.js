'use strict'

const express = require('express').Router
const route = express()
const vendorRouter = require('./vendorRouter')
const userRouter = require('./userRouter')

route.use(vendorRouter, userRouter)


module.exports = route