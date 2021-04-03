const Student=require('../models/student.model')

//this function will perform the INSERT Operations
exports.student_add=(req,res)=>{
    let student = new Student({
        name:req.body.name,
        regid:req.body.regid,
        sec:req.body.sec

    });
    
    student.save((err)=>{
    
        if(err)
        {
            return next(err);
        }
         res.redirect('/list');
    });
    
    }
    
    
    //this function will load the INSERT Form, View to load
    exports.student_formadd=(req,res)=>{
    res.render('createform',{page:'New Student', menuId:'createform'})
    }
    //This function loadds the view and finds all the documents in the student collections
    exports.student_list=(req,res)=>{
        Student.find((err,student)=>{
    
            if(err)
            {
                return next(err);
            }
            res.render('list',{page:'List all Students',menuId:'list',student:student});
        
                                                                      //reflectoion of itself
        });
    }
    
    
    //this function will perform the delete operation
    
    exports.student_delete=(req,res)=>{
        Student.findByIdAndRemove(req.params.id,(err)=>{
            if(err) return next (err);
            res.redirect('/list');
        });
    }
    
    //this function will call the updateform view
    exports.student_updateform=(req,res)=>{
        Student.findById(req.params.id,(err,student)=>{
            if (err) return next(err);
            res.render('updateform',{page:'Update Student',menuId:'updateform',student:student});
        })
    }
    
    //this function will perform the update operation
    
    exports.student_update=(req,res)=>{
        Student.findByIdAndUpdate(req.params.id,{$set:req.body},(err,student)=>{
            if (err) return next(err);
         res.redirect('/list');
        })
    }