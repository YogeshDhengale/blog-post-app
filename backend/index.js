const express=require('express')
require('dotenv').config();
const dbconnect=require('./connection/connection')
const cors=require("cors")

const PORT=process.env.PORT || 5000
dbconnect()

const app=express()

const registerAndLogin=require('./routes/registerAndLogin')
const addblog=require('./routes/blog')
app.use(cors())
app.use(registerAndLogin)
app.use(addblog)

app.listen(PORT, ()=>{
    console.log(`Server is Running on ${PORT}`)
})