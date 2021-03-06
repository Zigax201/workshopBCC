const express = require('express');
const db = require('./db/connection');
const app = express();
const middlewares = require('./auth/middleware');
const user = require('./api/user');
const auth = require('./auth/index');
const api = require('./api')
require('dotenv').config();
app.use(express.json());
app.use(middlewares.CheckToken);
app.use('/auth',auth);
app.use('/user',middlewares.validateLogin,user)
app.use(api)

app.get('/',(req,res,next)=>{
  res.json({
    message:"Helo World"
  })
})
db.then(() => {
    console.log('Connected correctly to server') 
  })

  
app.listen(5000,()=>{
    console.log('app is running port 5000');
})