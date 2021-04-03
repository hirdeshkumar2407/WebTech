const mongoose=require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    name: {type: String, require: true, },
    regid: {type: Number, required: true},
    sec: {type: String, require: true, }
}
);

module.exports = mongoose.model('Student',StudentSchema);
