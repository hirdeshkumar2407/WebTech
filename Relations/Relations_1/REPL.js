const mongoose = require('mongoose');
const db = require('./models');
const Student = require('./models/Student');
const Mark = require('./models/Mark');
const Head = require('./models/Head');
const Grade = require('./models/Grade');

// db.Student.find().then((students) => {
// 	students.map(async (student) => {
// 		console.log(student.regno);
// 		await db.Mark.updateMany(
// 			{ regno: student.regno },
// 			{
// 				$set: {
// 					student: student._id,
// 				},
// 			}
// 		);
// 	});
// });

db.Mark.find()
	.populate('student')
	.then((marks) => {
		console.log(JSON.stringify(marks, null, ' \t'));
	});

// db.Student.find().then((students) => {
// 	students.map(async (student) => {
// 		let studentMarks = await db.Mark.find({ regno: student.regno }).select({ _id: 1 });

// 		await db.Student.updateOne(
// 			{ regno: student.regno },
// 			{
// 				$push: {
// 					marks: studentMarks,
// 				},
// 			}
// 		);
// 		console.log(student.regno);
// 	});
// });

// db.Student.find()
// 	.populate('marks')
// 	.then((students) => {
// 		console.log(JSON.stringify(students, null, ' \t'));
// 	});
