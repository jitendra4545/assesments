


const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to the shunyeka")
})





app.listen(process.env.port, async () => {
    console.log(`server running on port ${process.env.port}`)
})