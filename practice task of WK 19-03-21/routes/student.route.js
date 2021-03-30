const express=require('express');
const router=express.Router();


const student_controller=require('../controllers/student.controller');
//http://localhost:3000/students/test
router.get('/test',student_controller.test);


//http://localhost:3000/students/add
router.post('/add',student_controller.add);

//http://localhost:3000/students/delete
router.delete('/:id/delete',student_controller.delete);

//http://localhost:3000/students/update
router.put('/:id/update',student_controller.update);


//http://localhost:3000/students/stdlist
router.get('/:id',student_controller.stdlist);
module.exports=router;