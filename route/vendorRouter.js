'use strict'
const express = require('express').Router
const route = express()
const VendorController = require('../controllers/vendorsController')


route.post('/vendor',VendorController.addVendor)  
route.get('/vendor',VendorController.fetchVendor)
route.post('/vendor/:vendorId/dish',VendorController.addDish)
route.get('/vendor/:vendorId/dish',VendorController.fetchDishesInVendor)
route.post('/vendor/:vendorId/tag',VendorController.addTagInVendor)
route.get ('/vendor/tag',VendorController.fetchVendorByTag)

module.exports = route