const express=require('express')
require('dotenv').config();
const cors=require('cors')
const PORT=process.env.PORT || 5000
const dbconnect=require('./connection/connection')

const app=express()
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, author");
  next();
});


dbconnect()

const registerAndLogin=require('./routes/registerAndLogin')
const addblog=require('./routes/blog')

app.use(registerAndLogin)
app.use(addblog)
app.listen(PORT, ()=>{
    console.log(`Server is Running on ${PORT}`)
})