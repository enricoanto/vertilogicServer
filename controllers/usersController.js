'use strict'
const { User, User_Dish, Dish } = require('../models/index')

class UserController {
    static async register(req, res, next) {
        try {
            const { name, username, password } = req.body
            const data = await User.create({ name, username, password })
            res.status(201).json(data)

        } catch (err) {
            next(err)
        }
    }
    static async addDish(req, res, next) {
        try {
            const UserId = req.params.userId
            const { DishId, notes, count } = req.body
            const checkUser = await User.findByPk(UserId)
            if (checkUser === null) {
                throw({name:"userNotFound"})
            }
            else {
                const data = await User_Dish.findOne({
                    where: {
                        DishId: DishId,
                        UserId: UserId
                    }
                })
                if (data === null) {
                    const input = await User_Dish.create({ UserId, DishId, notes, count: +count })
                    res.status(201).json(input)
                } else {
                    let newCount = data.count + Number(count)
                    const input = await User_Dish.update({ count: newCount, notes }, {
                        where: {
                            DishId: DishId,
                            UserId: UserId
                        }, returning: true
                    })
                    res.status(201).json(input[1][0])
                }
            }
        } catch (err) {
            next(err)
        }
    }
    static async listOrder(req, res, next) {
        try {
            const UserId = req.params.userId
            const checkUser = await User.findByPk(UserId)
            if (checkUser === null) {
                throw({name:"userNotFound"})
            } else {
                const data = await User.findByPk(UserId, { include: ['Dishes'] },{ exclude: ['password']})
                res.status(200).json(data)
            }
        } catch (err) {
            next(err)
        }
    }
}
module.exports = UserController