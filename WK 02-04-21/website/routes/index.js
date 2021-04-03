var express = require('express');
var router = express.Router();
const product_controller=require('../controllers/product.controller')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home', menuId:'home'});
});


router.get('/about',function(req,res,next){
  res.render('about', { page: 'About', menuId:'about'});

})
router.get('/contact', function(req, res, next) {
  res.render('contact', { page: 'Contact', menuId:'contact'});
});
//     CRUD ROUTES

//route that will show all products 
router.get('/list',product_controller.product_list);

//route that will show insert form 
router.get('/createform',product_controller.product_formcreate);

//route that will show insert operation
router.post('/create',product_controller.product_create);

//route. delete is not used because we need forms req.body 
//only used in api

//deletion operation
router.post('/:id/delete',product_controller.product_delete);


//call tje update form
router.post('/updateform/:id', product_controller.product_updateform);
//call the update operation 

router.post('/:id/update', product_controller.product_update)

module.exports = router;
