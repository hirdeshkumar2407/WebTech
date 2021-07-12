const db = require('./models');

db.Student.aggregate([
	{
		$lookup: {
			from: 'marks',
			localField: 'regno',
			foreignField: 'regno',
			as: 'score',
		},
	},
	{
		$unwind: '$score',
	},
	{
		$group: {
			_id: { regno: '$regno', name: '$name' },
			total: { $sum: '$score.marks' },
		},
	},
	{
		$project: {
			_id: 0,
			regno: '$_id.regno',
			name: '$_id.name',
			total: 1,
		},
	},
	{
		$match: { total: { $lte: 60 } }, // $lte = less then equals to
	},
]).then((students) => {
	console.log(JSON.stringify(students, null, '\t'));
	process.exit();
});
