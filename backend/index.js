const express=require('express')
require('dotenv').config();
const dbconnect=require('./connection/connection')

const PORT=process.env.PORT || 5000
dbconnect()

const app=express()

const registerAndLogin=require('./routes/registerAndLogin')
const addblog=require('./routes/blog')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, author");
  next();
});

app.use(registerAndLogin)
app.use(addblog)

app.listen(PORT, ()=>{
    console.log(`Server is Running on ${PORT}`)
})