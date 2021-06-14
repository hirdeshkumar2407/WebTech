const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app=express();
const BookModel=require('./models/Book');
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Hirdesh:12345@cluster0.0rbdn.mongodb.net/Test?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:true});
app.post("/insert", async (req, res) => {
    const title = req.body.title;
    const isbn = req.body.isbn;
    const pageCount = req.body.pageCount;
    const shortDescription = req.body.shortDescription;

    const book = new BookModel({ title: title, isbn: isbn, pageCount: pageCount, shortDescription: shortDescription });
    try {
        await book.save();
        console.log('Book insert to database')
       
    } catch (err) {
        console.log(err);
    }
});
app.get("/read",async(req,res)=>{

    BookModel.find({},(err, result)=>{
        if(err) res.send(err);

        res.send(result);
       
    });
});
app.put("/update",async(req,res)=>{
const newtitle= req.body.newtitle;
const id=req.body.id;

try {
await BookModel.findById(id,(err,updatedtitle)=>{
updatedtitle.title=newtitle;
updatedtitle.save();
res.send('Updated')

})


}catch(err){
console.log(err);
}

});
app.delete("/delete/:id",async(req,res)=>{
const id =req.params.id;

await BookModel.findByIdAndRemove(id).exec();
res.send('Deleted');

});


app.listen(3002,()=>{
console.log('Server is running at port 3002')

});