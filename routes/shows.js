const { Router } = require('express')
const { Show, User } = require("../models")

const showRouter = Router()

showRouter.get("/all", async (req, res) => {
    const allShow = await Show.findAll()
    res.send(allShow)
})

showRouter.get("/one/:title", async (req, res) => {
    const requestedTitle = req.params.title
    const show = await Show.findOne({where : {title: requestedTitle}})
    res.send(show)
})


module.exports= showRouter