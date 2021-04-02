const express = require('express');
const student=require('./routes/student.route');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');


const app = express();

//This connection responds to my altas cluster studentsDb
mongoose.connect("mongodb+srv://Hirdesh:12345@cluster0.0rbdn.mongodb.net/studentsDb?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('Connected to the Database');
})
.catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
      });

//This connection responds to my local machine studentsDb
/*mongoose.connect("mongodb://localhost/studentsDb",{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('Connected to the Database');
})
.catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
      });
*/
      
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/students',student)

app.listen(3000, () =>{

    console.log("Server running fine at 3000")
})
