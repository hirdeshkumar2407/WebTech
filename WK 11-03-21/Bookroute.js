//This handles crud for books
var express = require('express')
var router = express.Router()
   //http:localhost:3000/books/
router.get('/',(req,res)=>{
    res.send('Welcome to my home page')
})
   //http:localhost:3000/Students/about


router.post('/',(req,res)=>{
    res.send("Add a book")
})

router.put('/',(req,res)=>{
res.send("Update a book")
//next() would cause this to jump in to the function below
})

router.delete('/',(req,res)=>{
    res.send("Delete a book")
})
//RouteMod will keep all crud operation for a entity
module.exports=router; // This cause
                      //module 
                      //to acesss
                      // to other js 
                      //file