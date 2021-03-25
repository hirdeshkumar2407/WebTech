//This handles crud for student
var express = require('express')
var router = express.Router()
   //http:localhost:3000/Students/
router.get('/',(req,res)=>{
    res.send('Welcome to my home page')
})
   //http:localhost:3000/Students/about
router.get('/about',(req,res)=>{
    res.send("About section")
})
//RouteMod will keep all crud operation for a entity
module.exports=router; // This cause
                      //module 
                      //to acesss
                      // to other js 
                      //file