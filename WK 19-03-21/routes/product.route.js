const express=require('express');
const router=express.Router();

//Connectivity 
//Controller is made at the end, then integrate
//App --> Router --> Controller --> Model

//include the controller here &
/*endpoints are route*/
const product_controller=require('../controllers/product.controller');

//routes here
router.get('/test',product_controller.test);
//http://localhost:3000/products/create
router.post('/create',product_controller.product_create);

router.get('/:id',product_controller.product_details);

router.put('/:id/update', product_controller.product_update);
router.delete('/:id/delete',product_controller.product_delete);
//export the router here
module.exports=router;