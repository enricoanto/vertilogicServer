'use strict'
const { Vendor, Vendor_Tag, Dish, Tag } = require('../models')


class VendorController {
    static async addVendor(req, res, next) {
        try {
            const { name, location, range_price } = req.body
            const data = await Vendor.create({ name, location, range_price })
            res.status(201).json(data)
        } catch (err) {
            next(err)
        }

    }
    static async fetchVendor(req, res, next) {
        try {
            const data = await Vendor.findAll({
                include: [{
                    model: Tag,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }, {
                    model: Dish
                }]
            })
            res.status(200).json(data)
        } catch (err) {
            console.log(err)
        }
    }
    static async addDish(req, res, next) {
        try {
            const VendorId = req.params.vendorId
            const { name, ingredients, price } = req.body
            const checkVendor = await Vendor.findByPk(VendorId)
            if (checkVendor === null) {
                throw ({ name: 'VendorNotFound' })
            } else {
                const data = await Dish.create({ name, ingredients, price, VendorId })
                res.status(201).json(data)
            }
        } catch (err) {
            next(err)
        }
    }
    static async fetchDishesInVendor(req, res, next) {
        try {
            const Vendorid = req.params.vendorId
            const data = await Dish.findAll({ where: { VendorId: Vendorid } })
            if (data.length === 0) {
                throw ({ name: 'VendorNotFound' })
            } else {
                res.status(200).json(data)
            }
        } catch (err) {
            next(err)
        }
    }
    static async addTagInVendor(req, res, next) {
        try {
            const tag = req.body.tag.toUpperCase()
            const VendorId = req.params.vendorId
            const checkVendor = await Vendor.findByPk(VendorId)
            if (checkVendor === null) {
                throw ({ name: 'VendorNotFound' })
            } else {

                const findTag = await Tag.findOne({
                    where: {
                        name: tag
                    }
                })
                if (findTag === null) {
                    throw ({ name: 'tagNotAvailable' })
                } else {
                    const inputTag = {
                        TagId: findTag.id,
                        VendorId
                    }
                    const data = await Vendor_Tag.create(inputTag)
                    res.status(200).json(data)
                }
            }
        } catch (err) {
            next(err)
        }
    }
    static async fetchVendorByTag(req, res, next) {
        try {
            const cuisines = req.query.cuisines.toUpperCase()
            const category = req.query.category.toUpperCase();
            let data = await Vendor.findAll({
                include: [{
                    model: Tag,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }]
            })
            let newData = []
            data.forEach(el => {
                el.flag = 0
                el.Tags.forEach(ele => {
                    if (ele.name === cuisines || ele.name === category) {
                        el.flag += 1
                    }
                })
                if (el.flag === 2) {
                    delete el.flag
                    newData.push(el)
                }
            })
            if(newData.length === 0) {
                throw({name: "VendorNotFound"})
            } else {
                res.status(200).json(newData)
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = VendorController