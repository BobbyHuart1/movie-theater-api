const { Router } = require('express')
const { Show, User } = require("../models")

const userRouter = Router()

userRouter.get("/all", async (req, res) => {
    const allUser = await User.findAll()
    res.send(allUser)
})

userRouter.get("/one/:username", async (req, res) => {
    const requestedUsername = req.params.username
    const oneUser = await User.findOne({where : {username: requestedUsername}})
    res.send(oneUser)
})

userRouter.get("/")





module.exports = userRouter