const Student=require('../models/student.model')

exports.test=(req,res)=>{

    res.send("Testing my contoller")
}

exports.add=(req,res)=>{
let student=new Student({
name: req.body.name,
regid:req.body.regid,
sec:req.body.sec
});
student.save((err)=>{
if(err){
    return next(err);
}
res.send("Student added to the system");
});

}



exports.delete=(req,res)=>{
Student.findByIdAndRemove(req.params.id,(err)=>{
    if (err) return next(err);
        res.send('Student Deleted!');
})

}
exports.update=(req,res)=>{
    Student.findByIdAndUpdate(req.params.id,{$set: req.body},(err,student)=>{
        if (err) return next(err);
    });

}
exports.stdlist=(req,res)=>{
Student.findById(req.params.id, (err,student)=>{
    if (err) return next(err);
    res.send(student);
})

}