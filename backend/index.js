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
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://6432de01c1587d3e2bd1e14c--reliable-dusk-a300d2.netlify.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
app.use(registerAndLogin)
app.use(addblog)

app.listen(PORT, ()=>{
    console.log(`Server is Running on ${PORT}`)
})