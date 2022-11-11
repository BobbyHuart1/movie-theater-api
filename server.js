const express = require("express")
const app = express()
const { db } = require("./db")
const userRouter = require("./routes/users")
const showRouter = require("./routes/shows")
const seed = require("./seed")


app.use(express.json())
app.use("/user", userRouter)
app.use("/show", showRouter)


app.listen(3000, async () => {
    await db.sync()
    seed()
    console.log("Listening on port 3000")
})