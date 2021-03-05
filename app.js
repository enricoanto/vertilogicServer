'use strict'
const express = require('express')
const errorHandler = require('./middlewares/errorHandlers')
const app = express()
const port = 3000
const router = require('./route/')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)
app.use(errorHandler)
app.listen(port, ()=> {
    console.log(`listening at port ${3000}`)
})