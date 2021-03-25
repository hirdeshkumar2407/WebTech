var r1=require('./RouteMod')// ./ picks external files in the folder 
var r2=require('./Bookroute')
//Basic students and book CRUD
var express=require('express')
var app=express()
// http://localhost:3000/books
app.use('/books',r2)


/************************************************************************** */
  //r1 is handling this route request
app.use('/Students',r1) ///we telling the the default
                        //http:localhost:3000/Students
                        //it will go to RouteMod.js

var server =app.listen(3000,()=>{
    console.log("Server running at 3000")
})
