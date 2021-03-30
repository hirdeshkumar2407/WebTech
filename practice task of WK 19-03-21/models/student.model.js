const mongoose=require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    name: {type: String, require: true, max:100},
    regid: {type: Number, required: true},
    sec: {type: String, require: true, max:100}
}
);

module.exports = mongoose.model('Student',StudentSchema);
