const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/recapsheets', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

module.exports = {
	Student: require('./Student'),
	Mark: require('./Mark'),
	Grade: require('./Grade'),
	Head: require('./Head'),
};
