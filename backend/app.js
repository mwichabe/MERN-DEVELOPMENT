const express=require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();



// import Routes
const userRoute= require('./route/user')

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //userCreateIndex:true,
}).then(()=>console.log('Connected to database')).catch((error)=>console.log(error));

//middleware
// Middleware function
const myMiddleware = (req, res, next) => {
    // Do something with the request
    console.log('Middleware function called');
    // Call the next middleware function in the stack
    next();
  };
  
  // Using the middleware in your application
  app.use(myMiddleware);
  

const port= process.env.PORT ||8000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});