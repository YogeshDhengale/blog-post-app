const express=require('express')
require('dotenv').config();
const cors=require('cors')
const PORT=process.env.PORT || 5000
const dbconnect=require('./connection/connection')

const app=express()
app.use(cors());




dbconnect()

const registerAndLogin=require('./routes/registerAndLogin')
const addblog=require('./routes/blog')

app.use(registerAndLogin)
app.use(addblog)
app.listen(PORT, ()=>{
    console.log(`Server is Running on ${PORT}`)
})