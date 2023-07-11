


const express = require('express')
const cors = require('cors')
const { UserModel } = require('./model/userModel')
const { connection } = require('./config/db')
require('dotenv').config()
const app = express()
app.use(express.json())


app.get("/users", async (req, res) => {
    try {
let user=await UserModel.find()
res.send(user)
     } catch (err) {
        res.send(err)

      }


})

app.get("/users/:id", async (req, res) => {
    const id=req.params.id
    console.log(id)
    try { 
       let one= await UserModel.find({"_id":id})
res.send(one)
    } catch (err) { 
        res.send(err)
    }


})

app.post("/adduser", async (req, res) => {
    const data = req.body
    console.log(data)

    try {
        const newData = new UserModel(data)
        await newData.save()
        res.send(newData)
  } catch (err) {
        res.send(err)
    }


})


app.put("/users/update/:id", async (req, res) => {
    const data=req.body
    const id=req.params.id
    console.log(data,id)
    try { 
let newData=await UserModel.findOneAndUpdate({"_id":id},data)
res.send(newData)
    } catch (err) {
res.send(err)
     }


})


app.delete("/users/delete/:id", async (req, res) => {
    const id=req.params.id
    try { 
    let data=await UserModel.findOneAndDelete({"_id":id})
    res.send(data)
    } catch (err) {
res.send(err)
     }

})





app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("db connected successfully")
    } catch (err) {
        console.log("connection failed")
    }
    console.log(`server running on port ${process.env.port}`)
})