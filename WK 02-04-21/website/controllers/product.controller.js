const Product = require('../models/product.model');


 
//this function will perform the INSERT Operations
exports.product_create=(req,res)=>{
let product = new Product({
    name:req.body.name,
    price:req.body.price
});

product.save((err)=>{

    if(err)
    {
        return next(err);
    }
     res.redirect('/list');
});

}


//this function will load the INSERT Form, View to load
exports.product_formcreate=(req,res)=>{
res.render('createform',{page:'New Product', menuId:'createform'})
}
//This function loadds the view and finds all the documents in the product collections
exports.product_list=(req,res)=>{
    Product.find((err,product)=>{

        if(err)
        {
            return next(err);
        }
        res.render('list',{page:'List all Products',menuId:'list',product:product});
    
                                                                  //reflectoion of itself
    });
}


//this function will perform the delete operation

exports.product_delete=(req,res)=>{
    Product.findByIdAndRemove(req.params.id,(err)=>{
        if(err) return next (err);
        res.redirect('/list');
    });
}

//this function will call the updateform view
exports.product_updateform=(req,res)=>{
    Product.findById(req.params.id,(err,product)=>{
        if (err) return next(err);
        res.render('updateform',{page:'Update Product',menuId:'updateform',product:product});
    })
}

//this function will perform the update operation

exports.product_update=(req,res)=>{
    Product.findByIdAndUpdate(req.params.id,{$set:req.body},(err,product)=>{
        if (err) return next(err);
     res.redirect('/list');
    })
}