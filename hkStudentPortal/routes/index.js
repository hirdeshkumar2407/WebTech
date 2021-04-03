var express = require('express');
var router = express.Router();

const student_controller=require('../controllers/student.controller')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home', menuId:'home'});
});


router.get('/features',function(req,res,next){
  res.render('features', { page: 'Features', menuId:'features'});

})

//     CRUD ROUTES

//route that will show all products 
router.get('/list',student_controller.student_list);

//route that will show insert form 
router.get('/createform',student_controller.student_formadd);

//route that will show insert operation
router.post('/create',student_controller.student_add);

//route. delete is not used because we need forms req.body 
//only used in api

//deletion operation
router.post('/:id/delete',student_controller.student_delete);


//call tje update form
router.post('/updateform/:id', student_controller.student_updateform);
//call the update operation 

router.post('/:id/update', student_controller.student_update)

module.exports = router;
