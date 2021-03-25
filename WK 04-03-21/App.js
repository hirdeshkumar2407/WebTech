const express = require('express')

var app = express()
//http:localhost:3000/
app.get('/',(req,res)=>{ //alternative app.route app.get('/',(req,res)=>{
    res.send("Hello Express")
}

)



//http:localhost:3000/Books
app.get('/Books',(req,res)=>{ //alternative app.route app.get('/Books',(req,res)=>{
    res.send("Welcome to Books Section")
}

)


//http:localhost:3000/Students //This method gets information
app.get('/Students',(req,res)=>{ //alternative app.route app.get('/Students',(req,res)=>{
    res.send("<h1>Welcome to Students section</h1>") //we can also use html
}

)
//This method send information
app.post('/Students',(req,res)=>{
res.send("You have sent the message to sever")
})
/*
app.all('/hope',(req,res)=>{  //this page does not exits //generally not recommemd to make 
    res.send("This page does not exits")
    
})*/




//to get data insertation from client
//eg:
// http://localhost:3000/Students/4/books/78
app.get('/Students/:studentid/books/:bookid',(req,res)=>{
                   //:studenid and :bookid are variables 
res.send(req.params) // all request parameter studentid: 4, bookid:78
    //it being saved at request body
})

//next value parameter
// http://localhost:3000/example/b
app.get('/example/b',(req,res,next)=>{
res.write("This is the first callback function") //res.write()  console.log()
next()
}, function (req,res) {
res.end("This is the second call back function") //res.send()   console.log()
}

)
var server = app.listen(3000,()=>{
console.log("The server is running at port 3000")

})

