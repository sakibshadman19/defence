const express = require("express")
const errorhandler = require("./middleware/error")
const cookie = require("cookie-parser")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")
const dotenv = require("dotenv")

const app = express()
dotenv.config({path:"backend/config/config.env"})

app.use(express.json())
app.use(cookie())
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileUpload())

const product = require("./routes/ProductRoute")
const user = require("./routes/userRoute")
const order =require("./routes/orderRoute")
const payment =require("./routes/paymentRoute")

app.use("/api/v1",product)
app.use("/api/v1",user)
app.use("/api/v1",order)
app.use("/api/v1",payment)


// Error

app.use(errorhandler)


module.exports = app