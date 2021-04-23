const Product=require('../models/product.model');

exports.test=function(req,res){
    res.send('Greetings from the Test Controller');
};

exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/products/list');
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_list = function (req, res) {
    Product.find(function (err, product) {
        res.render('list', { page:'Show all Products', menuId:'list',product:product});        
    })
};
//Get new product screen page
exports.product_formcreate = function (req, res) {
    Product.find(function (err, product) {
        res.render('createform', { page:'New Product', menuId:'createform'});        
    })
};

exports.user_auth = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
				res.redirect('/home');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
};
//method to update product by ID
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        //res.send('Product udpated.');
        res.redirect('/products/list');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        //res.send('Deleted successfully!');
        res.redirect('/products/list');
    })
};

//Get update form
exports.product_formupdate = function (req, res) {
    Product.findById(req.params.id,function (err, product) {
        if (err) return next(err);
        res.render('updateform', { page:'Update Product',menuId:'updateform', product:product});        
    })
};
