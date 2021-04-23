const express=require('express');
const router=express.Router();

const product_controller=require('../controllers/product.controller');

router.get('/test',product_controller.test);
router.post('/create', product_controller.product_create);
router.get('/createform', product_controller.product_formcreate);//load new product form
router.get('/list', product_controller.product_list);
router.post('/updateform/:id', product_controller.product_formupdate);//load update product form

router.post('/:id/update', product_controller.product_update);

router.post('/:id/delete', product_controller.product_delete);
module.exports=router;