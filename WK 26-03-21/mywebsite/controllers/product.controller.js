const Product=require('../models/product.model')

//http://localhost:3000/products/test
exports.test=(req,res)=>{
    res.send('Greetings from Test Controller')
}

exports.product_create=(req,res)=>{
    let product=new Product({
        name:req.body.name, //Product is model coming from model
        price:req.body.price // may use name:req.param.price
    });//Product is model coming from model
//The Model has to start captial letter Product
//Export the model

    product.save((err)=>{
        if (err){
            return next(err);
        }
        res.send('Product created successfully.');
    });
        
}
// Product.findById(req.params.id,()=>{}) is a mongodb function
exports.product_details=(req,res)=>{
    Product.findById(req.params.id, (err,product)=>{
        if (err) return next(err);
        res.send(product);
    })
}
 //note $set: req.body is updating the information
 // if wanted you update one row use req.body.price 
exports.product_update=(req,res)=>{
    Product.findByIdAndUpdate(req.params.id,{$set: req.body},(err,product)=>{
        if (err) return next(err);
        res.send('Product updated.');
    });
}

exports.product_delete=(req,res)=>{
    Product.findByIdAndRemove(req.params.id,(err)=>{
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
}
exports.list=(req,res)=>{
    Product.find((err,products)=>{
if(!err){res.render('product',{page:'Product List',menuId:'list',products:products})}
else{
  console.log('Error in retreieving products'+JSON.stringify(err,underfined,2))  ;
  //docs:docs
}  
})
}